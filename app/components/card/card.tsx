'use client'
import dynamic from 'next/dynamic'
import bootstrap from 'bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'next/Image';
import meImage from '@/public/next.svg'

function CardWrapper({data, children, title}: { data: any, children: React.ReactNode, title: string}) {
    return (
        <div className="mr-6">
            <Card>
                <Card.Body>
                    <Card.Header>
                        <Card.Title>
                            {title}
                        </Card.Title>
                    </Card.Header>
                    {children}
                    <Card.Footer className="flex justify-between">
                        <Image alt="avatar" src="/next.svg" width={50} height={50}/>
                        <div>
                            <span className="inline-block mr-2">3</span>
                            <i className="bi bi-chat-right-text"/>
                        </div>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
    );
}
export default CardWrapper;
