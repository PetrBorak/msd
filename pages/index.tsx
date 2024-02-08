import "bootstrap/scss/bootstrap.scss";
import dynamic from 'next/dynamic'
import ContainerCards from '../app/components/card/container';
import './globals.css';
import BarChartNoSSRRenderer from "../app/components/chart/engines/bar-chart-renderer";
import PieChartNoSSRRenderer from "../app/components/chart/engines/pie-chart-renderer";
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import dictionary from '@/app/dictionary/en';
import CardWrapper from '../app/components/card/card';

export default function Home(props: { data: any} ) {
    const ChartNoSSRR = dynamic(() => import("../app/components/chart/chart"))
    return(
        <>
            {/*TOOD - move to layout, when nested routes will be added*/}
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">{dictionary["nav-bar-header"]}</Navbar.Brand>
                </Container>
            </Navbar>
            <Container>
                <div className="my-6">
                    {dictionary['homepage-title']}
                </div>
                <ContainerCards>
                    <CardWrapper data={props.data}>
                        <Card.Title>Bar Chart</Card.Title>
                        <ChartNoSSRR renderer={BarChartNoSSRRenderer} data={props.data.data}></ChartNoSSRR>
                    </CardWrapper>
                    <CardWrapper data={props.data}>
                        <Card.Title>Pie Chart</Card.Title>
                        <ChartNoSSRR renderer={PieChartNoSSRRenderer} data={props.data.data}></ChartNoSSRR>
                    </CardWrapper>
                </ContainerCards>
            </Container>
        </>
      )
}

export async function getServerSideProps(context: any){
    const res = await fetch('https://coronavirus.data.gov.uk/api/v1/data?filters=areaType=nation;areaName=England&structure=%7B%22date%22:%22date%22,%22newFirstEpisodesBySpecimenDate%22:%22newFirstEpisodesBySpecimenDate%22,%22newReinfectionsBySpecimenDate%22:%22newReinfectionsBySpecimenDate%22%7D')
    const repo = await res.json();
    debugger
    return { props: { data: repo } }
}
