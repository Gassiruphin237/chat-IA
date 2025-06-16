import React from 'react'
import './Section.css'
import image from '../../assets/IMAGE.jpg'
import { FaChevronLeft, FaChevronRight, FaGlobe, FaMobileAlt, FaPalette } from 'react-icons/fa'

function Section() {
    return (
        <>
            <div className='container-fluid py-5'>
                <div className="text-center mb-4">
                    <h5 className="text-uppercase fw-bold" style={{ color: '#26348C' }}>
                        QUI SOMMES NOUS ?
                    </h5>
                    <div style={{
                        height: '4px',
                        width: '80px',
                        backgroundColor: '#26348C',
                        margin: '0 auto',
                        //   marginTop: '-10px',
                        borderRadius: '5px'
                    }}></div>
                </div>

                <div className="container border p-4">
                    <div className="row align-items-center">
                        <div className="col-md-4 mb-3 mb-md-0">
                            <img src={image} alt="Présentation" className="img-fluid rounded" />
                        </div>
                        <div className="col-md-8">
                            <p className="text-justify">
                                <strong>SOFTRONIC</strong> est une SSII située au Cameroun plus précisément à Douala Makepe BM, rue Tchak's.
                                L'entreprise SOFTRONIC a été créée en l’an 2000 par son président directeur général Armel SIME NGONGANG,
                                suite à un contrat avec GETMA Cameroun pour un logiciel de Tracking de Conteneurs.
                                C’est la suite de ce contrat qu’est née la société SOFTRONIC.
                            </p>
                           <button className="button">En savoir plus  <FaChevronRight size={10}  className="text-primary" id='fleche' style={{ cursor: 'pointer' }} /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid py-5'>
                <div className="text-center mb-4">
                    <h5 className="text-uppercase fw-bold" style={{ color: '#26348C' }}>
                        NOS PRODUITS
                    </h5>
                    <div style={{
                        height: '4px',
                        width: '80px',
                        backgroundColor: '#26348C',
                        margin: '0 auto',
                        borderRadius: '5px'
                    }}></div>
                </div>

                <div className="container-fluid py-5">
                    <div className="row align-items-center">
                        <div className="col-1 text-center d-none d-md-block">
                            <FaChevronLeft size={24} className="text-primary" style={{ cursor: 'pointer' }} />
                        </div>

                        <div className="col-md-3 mb-3 mb-md-0 text-center">
                            <img src={image} alt="Produit BrainOpX" className="img-fluid img-rounded" />
                        </div>

                        <div className="col-md-7">
                            <p className="text-justify">
                                <strong>SOFTRONIC</strong> est une SSII située au Cameroun plus précisément à Douala Makepe BM, rue Tchak's.
                                L'entreprise SOFTRONIC a été créée en l’an 2000 par son président directeur général Armel SIME NGONGANG,
                                suite à un contrat avec GETMA Cameroun pour un logiciel de Tracking de Conteneurs.
                                C’est la suite de ce contrat qu’est née la société SOFTRONIC.
                            </p>
                            <button className="button">En savoir plus  <FaChevronRight size={10}  className="text-primary" id='fleche' style={{ cursor: 'pointer' }} /></button>
                        </div>

                        <div className="col-1 text-center d-none d-md-block">
                            <FaChevronRight size={24} className="text-primary" style={{ cursor: 'pointer' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid py-5' style={{ backgroundColor: '#ccd1ff' }}>
                <div className="text-center mb-5">
                    <h5 className="text-uppercase fw-bold" style={{ color: '#26348C' }}>
                        NOS SERVICES
                    </h5>
                    <div style={{
                        height: '4px',
                        width: '100px',
                        backgroundColor: '#26348C',
                        margin: '0 auto',
                        borderRadius: '5px'
                    }}></div>
                </div>

                <div className="container">
                    <div className="row justify-content-center g-4">
                        <div className="col-md-4">
                            <div className="bg-white p-4 rounded shadow-sm h-100">
                                <h6 className="fw-bold text-uppercase">Sites Internet et Web Apps</h6>
                                <div style={{
                                    height: '4px',
                                    width: '100px',
                                    float: 'left',
                                    backgroundColor: '#26348C',
                                    margin: '0 auto',
                                    borderRadius: '5px'
                                }}></div>
                                {/* <FaGlobe size={20} className="text-primary float-end" /> */}
                                <p className="mt-4 text-justify">
                                    De la rédaction à la publication de votre site, en passant par son hébergement, nous nous offrons à vos côtés
                                    un service complet et une solution fiable de bout en bout : hébergement, emails, mailings, gestion DNS,
                                    bases de données, compatibilité SSL… Que vous ayez besoin d’un simple site, espace e-commerce ou un portail,
                                    nous disposons d’outils pour concrétiser votre projet avec un rendu soigné.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-white p-4 rounded shadow-sm h-100">
                                <h6 className="fw-bold text-uppercase">Creative Design</h6>
                                <div style={{
                                    height: '4px',
                                    width: '100px',
                                    float: 'left',
                                    backgroundColor: '#26348C',
                                    margin: '0 auto',
                                    borderRadius: '5px'
                                }}></div>
                                {/* <FaPalette size={20} className="text-primary float-end" /> */}
                                <p className="mt-4 text-justify">
                                    Notre identité visuelle clairement exprimée ne pourrait exister en l’absence d’un travail de design :
                                    portfolios, logos, flyers, cartes de visite, packagings, animations, plaquettes, vidéos, etc.
                                    De la conception au print, nos créations sont façonnées pour que vos contenus soient lisibles,
                                    élégants et cohérents.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-white p-4 rounded shadow-sm h-100">
                                <h6 className="fw-bold text-uppercase">Applications Mobiles</h6>
                                <div style={{
                                    height: '4px',
                                    width: '100px',
                                    float: 'left',
                                    backgroundColor: '#26348C',
                                    margin: '0 auto',
                                    borderRadius: '5px'
                                }}></div>
                                {/* <FaMobileAlt size={20} className="text-primary float-end" /> */}
                                <p className="mt-4 text-justify">
                                    Android ou iPhone, les applications conçues et développées par SOFTRONIC répondent aux standards de
                                    performance, de sécurité et d’efficacité. Garantir un accès facile à vos services via une tablette ou
                                    votre smartphone est notre priorité.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    
    )
}

export default Section
