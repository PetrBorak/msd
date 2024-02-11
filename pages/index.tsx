import "bootstrap/scss/bootstrap.scss";
import dynamic from 'next/dynamic'
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

import "bootstrap-icons/font/bootstrap-icons.css";

import './globals.css';
import BarChartNoSSRRenderer from "@/app/components/chart/engines/bar-chart-renderer";
import PieChartNoSSRRenderer from "@/app/components/chart/engines/pie-chart-renderer";
import ContainerCards from '@/app/components/card/container';
import dictionary from '@/app/dictionary/en';
import CardWrapper from '@/app/components/card/card';

export default function Home(props: { data: any} ) {
    const ChartNoSSR = dynamic(() => import("../app/components/chart/chart"))
    return(
        <>
            {/*TOOD - move to layout, when nested routes will be added*/}
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">{dictionary["nav-bar-header"]}</Navbar.Brand>
                </Container>
            </Navbar>
            <Container>
                <div className="my-6 flex justify-between items-stretch">
                    <span className="inline-block">{dictionary['homepage-title']}</span>
                    <div>
                        <Badge>
                            <span className="inline-block mr-2">{dictionary["export-to-pdf"]}</span>
                            <i className="bi bi-download"/>
                        </Badge>
                        <Badge className="ml-2">
                            <span className="inline-block mr-2">{dictionary["news"]}</span>
                            <span className="mr-2">3</span>
                            <i className="bi bi-card-text"/>
                        </Badge>
                        <Badge className="ml-2" >
                            <span className="inline-block mr-2">{dictionary["filter"]}</span>
                            <Badge bg="secondary" className="mr-2">3</Badge>
                            <i className="bi bi-filter"/>
                        </Badge>
                    </div>
                </div>
                <ContainerCards>
                    <CardWrapper title="Bar Chart" data={props.data}>
                        <ChartNoSSR renderer={BarChartNoSSRRenderer} data={props.data.data}></ChartNoSSR>
                    </CardWrapper>
                    <CardWrapper title="Pie Chart" data={props.data}>
                        <ChartNoSSR renderer={PieChartNoSSRRenderer} data={props.data.data}></ChartNoSSR>
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
