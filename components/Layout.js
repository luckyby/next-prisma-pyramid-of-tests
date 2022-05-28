// @flow
// import * as React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({children}) => {
    return (
        <div className=''>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="shortcut icon" href="/pngegg2.png" />
            </Head>
            {/*<Header tag_1='h1' main_title_1='Server for testing' tag_2='h2' main_title_2='(based on Next.js)'/>*/}
            <Header tag_1='h3' main_title_1='Welcome to server for testing' tag_2='h2' main_title_2=''/>
            {children}
            <Footer />
        </div>
    );
};

export default Layout