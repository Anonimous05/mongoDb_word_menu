import React, {Component} from "react";
import {axiosAPI} from '../../axiosAPI';
import Details from '../../details';
import {ToastContainer,toast} from "react-toastify";
import './Main.css';

class Main extends Component {

    state = {
        catalogs: null,
        subCatalogs1: null,
        subCatalogs2: null,
        ads: null,
        subCatalogs1ForMap: null,
        subCatalogs2ForMap: null,
        adsForMap: null,
    };

    async componentDidMount() {
        try {
            const responseCatalogs = await axiosAPI.get('/categories');
            const responseSubCatalogs1 = await axiosAPI.get('/subCatalogs');
            const responseSubCatalogs2 = await axiosAPI.get('/subCatalog2');
            const responseAds = await axiosAPI.get('/ads');
            this.setState({catalogs: responseCatalogs.data,
                subCatalogs1: responseSubCatalogs1.data,
                subCatalogs2: responseSubCatalogs2.data,
                ads: responseAds.data,
            });
        }catch(e){
            toast.error(e.response);
        }
    }

    subCatalog1 = (subCatalog1) => {
        const find = this.state.subCatalogs1.filter(child => subCatalog1.catalogName === child.childOf);
        this.setState({subCatalogs1ForMap: find,subCatalogs2ForMap: null});
    };

    subCatalog2 = (subCatalog2) => {
        const find = this.state.subCatalogs2.filter(child => child.childOf === subCatalog2.subCatalogName);
        this.setState({subCatalogs2ForMap: find});
    };

    ads = (ads) => {
        const find = this.state.ads.filter(child => child.childOf === ads.subCatalogName3);
        this.setState({adsForMap: find});
    };

    detailsHandler = () => {
        this.props.history.push('/details');
    };

    render() {
        return (
            <div className="App">
                <ToastContainer/>
                <nav className="menu-nav">
                    <ul className="menu-ul">
                        {this.state.catalogs && Object.keys(this.state.catalogs).map(info => (
                            <li onMouseOver={() => this.subCatalog1(this.state.catalogs[info])}
                                key={info}>{this.state.catalogs[info].catalogName}</li>
                        ))}
                    </ul>
                    <ul className="subCatalog1" style={{display: this.state.subCatalogs1ForMap === null ? "none" : "block"}}>
                        {this.state.subCatalogs1ForMap && Object.keys(this.state.subCatalogs1ForMap).map(info => (
                            <li onMouseOver={() => this.subCatalog2(this.state.subCatalogs1ForMap[info])} key={info}>
                                {this.state.subCatalogs1ForMap[info].subCatalogName}
                            </li>
                        ))}
                    </ul>
                    <ul className="subCatalog2" style={{display: this.state.subCatalogs2ForMap === null ? "none" : "block"}}>
                        {this.state.subCatalogs2ForMap && Object.keys(this.state.subCatalogs2ForMap).map(info => (
                            <li onClick={() => this.ads(this.state.subCatalogs2ForMap[info])} key={info}>
                                {this.state.subCatalogs2ForMap[info].subCatalogName3}
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="adsContainer">
                    {this.state.adsForMap && Object.keys(this.state.adsForMap).map(info => (
                        <div key={info} className="adsBlock">
                            <p className="adsName">Имя: {this.state.adsForMap[info].adsName}</p>
                            <p className="adsPrice">Цена: {this.state.adsForMap[info].adsPrice}</p>
                            <button onClick={() => this.detailsHandler(this.state.adsForMap[info])} className="details">Подробнее</button>
                            <Details details={this.state.adsForMap[info]}/>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Main;