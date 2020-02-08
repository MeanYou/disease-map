import Header from "../components/Header";
import dynamic from 'next/dynamic';

const DynamicMyMap = dynamic(
    () => import('../components/MyMap'),
    { ssr: false }
)

const Index = () => {

    return (
        <div className="container">
            <Header />
            <DynamicMyMap />
            <style jsx>{`
                .container {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    left: 0;
                    top: 0;
                }
            `}</style>
        </div>
    );
}

export default Index;