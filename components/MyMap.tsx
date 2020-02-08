import L from 'leaflet';
import { useRef, useEffect } from "react";
import axios from 'axios';

const MyMap = () => {
    const mapRef = useRef<L.Map>();
    const mapBoxRef = useRef<HTMLDivElement>(null);
    // 初始化加载地图
    useEffect(() => {
        // dom加载完成后新建地图
        mapRef.current = new L.Map(mapBoxRef.current as HTMLDivElement, {
            center: [39.90791, 116.397006],
            zoom: 11
        });
        // 高德地图切片地址
        const url = "http://webrd0{s}.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scale=1&style=8";
        new L.TileLayer(url, {
            subdomains: "1234"
        }).addTo(mapRef.current);
        // 绑定地图事件
        mapRef.current.addEventListener('dragend', (e) => {
            console.log(e.target.getCenter());
            console.log(e.target.getZoom());
        });

        return () => {
            mapRef.current = undefined;
        };
    }, []);

    // 获取用户位置，使用腾讯接口获取疫情信息
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            alert(position.coords.longitude);
            mapRef.current?.flyTo([position.coords.latitude, position.coords.longitude], 17);
            // 首先根据经纬度获取所在城市
            const url = `https://restapi.amap.com/v3/geocode/regeo?location=${position.coords.longitude},${position.coords.latitude}&key=ee420794c4113817c43da88d7dc18130`;
            axios.get(url).then((res) => {
                console.log(res.data.regeocode.addressComponent);
                alert(res.data.regeocode.formatted_address);
            });
        }, () => {
            alert('获取位置失败了呀');
        }, {});
    }, []);

    return (
        <>
            <div id="map" ref={mapBoxRef}></div>
            <style jsx>{`
                #map {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                }
            `}</style>
        </>

    );
}

export default MyMap;