'use client'
import dynamic from 'next/dynamic'
import bootstrap from 'bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardWrapper({data, children}: { data: any, children: React.ReactNode}) {
    const ChartNoSSRR = dynamic(() => import("../../components/chart/chart"))
    return (
        <div className="mr-6">
            <Card>
                <Card.Body>
                    {children}
                </Card.Body>
            </Card>
        </div>
    );
}
export default CardWrapper;
