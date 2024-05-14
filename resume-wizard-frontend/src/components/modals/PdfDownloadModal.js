import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import PdfTemplate from "../pdf/PdfTemplate";

import { useNavigate } from "react-router-dom";

const PdfDownloadModal = ({ show, onHide, details }) => {
    const navigate = useNavigate();

    useEffect(() => {
        console.log(details);
    }, []);

    return (
        <Modal
            data-bs-theme="light"
            show={show}
            onHide={onHide}
            centered
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <div className="fs-5">Resume Template Download</div>
            </Modal.Header>
            <Modal.Body>
                <div className="p-2 d-flex flex-column align-items-center justify-content-center">
                    <PDFViewer height={423} showToolbar={false}>
                        <PdfTemplate details={details} />
                    </PDFViewer>
                    <br />
                    <div className="d-flex align-items-center justify-content-between w-100">
                        <Button onClick={() => navigate('/home')}>Home</Button>
                        <PDFDownloadLink document={<PdfTemplate details={details} />} filename="FORM">
                            {({ loading }) => (
                                loading ? <Button>Loading Document...</Button> : <Button>Download</Button>
                            )}
                        </PDFDownloadLink>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default PdfDownloadModal;