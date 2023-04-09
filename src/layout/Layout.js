import Sidebar from "@/components/Sidebar"
import Head from "next/head"
import Modal from 'react-modal';
import useQuiosco from "@/hooks/useQuiosco";
import ModalProduct from "@/components/ModalProduct";
import Nav from "@/components/Nav";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#__next');


export default function Layout({ children, page }) {
    const router = useRouter()
    const { modal } = useQuiosco()

    return (
        <>
            <Head>
                <title>Café - {page}</title>
                <meta name="description" content="Quiosco Cafetería" />
            </Head>
            <div className="xl:flex gap-5 ">
                <aside className={`${router.pathname != "/" ? "opacity-25 pointer-events-none" : "opacity-100"} md:w-full xl:w-1/4 2xl:w-1/5`}>
                    <Sidebar />
                </aside>
                
                <main className="md:w-full xl:w-3/4 2xl:w-4/5 ">
                    <div className="p-10 ">
                        <Nav />
                        {children}
                    </div>
                </main>
            </div>
            <ToastContainer />
            {modal && (
                    <Modal
                        isOpen={modal}
                        style={customStyles}
                    >
                        <ModalProduct />
                    </Modal>
            )}
        </>
    )
}
