import {fireEvent, render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../pages";
import Recorditem from "../components/Recorditem";
import Routestitle from "../components/Routestitle";
import Routessubtitle from "../components/Routessubtitle";
import Header from "../components/Header";
import Footer from "../components/Footer";


describe ("server did render main page with", ()=>{

    it("Recorditem", ()=>{
        render(<Recorditem />);
        expect(screen.getByTestId("recordItem")).toBeInTheDocument();
    });
    it("all Recorditem", ()=>{
        render(<Home />);
        const allRecorditem = screen.getAllByTestId("recordItem");
        expect(allRecorditem.length).toBe(14);
    });
    it("Routestitle", ()=>{
        render(<Routestitle />);
        expect(screen.getByTestId("routesTitle")).toBeInTheDocument();
    });
    it("Routessubtitle", ()=>{
        render(<Routessubtitle />);
        expect(screen.getByTestId("routesSubtitle")).toBeInTheDocument();
    });
    it("Header", ()=>{
        render(<Header tag_1='h3' main_title_1='Welcome to server for testing' tag_2='h2' main_title_2=''/>);
        expect(screen.getByTestId("componentHeader")).toBeInTheDocument();
    });
    it("Footer", ()=>{
        render(<Footer />);
        expect(screen.getByTestId("mainFooter")).toBeInTheDocument();
    });
    it("routesApi", ()=>{
        render(<Home />);
        expect(screen.getByTestId("recordBlockApi")).toBeInTheDocument();
        expect(screen.getByTestId("routesApi")).toBeInTheDocument();
    });
    it("routesPages", ()=>{
        render(<Home />);
        expect(screen.getByTestId("recordBlockPages")).toBeInTheDocument();
        expect(screen.getByTestId("routesPages")).toBeInTheDocument();
    });
    it("routesBlock", ()=>{
        render(<Home />);
        expect(screen.getByTestId("routesBlock")).toBeInTheDocument();
    });
    it("main div", ()=>{
        render(<Home />);
        expect(screen.getByTestId("pagetitle")).toBeInTheDocument();
        expect(screen.getByTestId("main")).toBeInTheDocument();
        expect(screen.getByTestId("mainWrapper")).toBeInTheDocument();
    });
});
