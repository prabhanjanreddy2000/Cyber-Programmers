import axios from "axios";
import { useState } from "react";
import '../styles/news.css'
import logo from '../images/logoNews.jpg'

export default function News(){
    var [news,setNews]=useState([])
    var [sources,setSources]=useState([])
    var [CNNnews,setCNNnews]=useState([])
    var [foxNews,setFoxNews]=useState([])
    var [BBCnews,setBBCnews]=useState([])
    var [search,setSearch]=useState("")
    var [generalNews,setGeneralNews]=useState([])
    var [selectedCategory,setSelectedCategory]=useState(null)
        function getNewsByCategory(e){
            setSelectedCategory(e)
            axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${e.target.value}/in.json`)
            .then((res)=>{
                setNews(res.data.articles)
            })
        }
            axios.get(`https://saurav.tech/NewsAPI/everything/cnn.json`)
            .then((res)=>{
                setCNNnews(res.data.articles)
            })
            axios.get(`https://saurav.tech/NewsAPI/everything/fox-news.json`)
            .then((res)=>{
                setFoxNews(res.data.articles)
            })
            axios.get(`https://saurav.tech/NewsAPI/everything/bbc-news.json`)
            .then((res)=>{
                setBBCnews(res.data.articles)
            })
            axios.get(`https://saurav.tech/NewsAPI/sources.json`)
            .then((res)=>{
                setSources(res.data.sources)
            })
            axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/general/in.json`)
            .then((res)=>{
                setGeneralNews(res.data.articles)
            })
            function searchData(e)
            {
                setSearch(e.target.value)
            }
    return(
        <>
        <div className="container-fluid my-4">
        <div className='row bg-success-subtle'>
            <div className='col-lg-12 text-center mt-3'><marquee behavior="scroll" direction="left" scrollamount="15"><h2 className="news-scroll">Get news updates from all over the world</h2></marquee></div>
        </div>
        <div className="row">
            <div className="col-lg-12 ">
                <img src={logo} className="d-block mx-auto"/>
            </div>
        </div>
            <div className="row">
                <div className="col-lg-12">
                    <h4>Some of our Sources: </h4>
                    {sources.map((x)=>{
                        if(x.id.length<10)
                            return(<b>{x.name}, </b>)
                    })}
                    <b>etc.</b>
                </div>
            </div>
        </div>
        <div>
            <hr/>
        </div>
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-lg-12">
                        <>
                        <nav id="navbar-example2" class="navbar bg-danger-subtle px-5 mb-3">
                        <h4>Latest from CNN</h4>
                        </nav>
                        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-danger-subtle p-4 my-2 rounded-2" tabindex="0">
                        {CNNnews.map((x)=>
                        <>
                        <li>
                        <b id="scrollspyHeading1">{x.title}</b>
                        <p>{x.description}</p>
                        </li>
                        </>
                        )}
                        </div>
                        </>
                </div>
            </div>
        </div>
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-lg-12">
                        <>
                        <nav id="navbar-example2" class="navbar bg-info-subtle px-5 mb-3">
                        <h4>Latest from Fox News</h4>
                        </nav>
                        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-info-subtle p-4 my-2 rounded-2" tabindex="0">
                        {foxNews.map((x)=>
                        <>
                        <li>
                        <b id="scrollspyHeading1">{x.title}</b>
                        <p>{x.description}</p>
                        </li>
                        </>
                        )}
                        </div>
                        </>
                </div>
            </div>
        </div>
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-lg-12">
                        <>
                        <nav id="navbar-example2" class="navbar bg-dark-subtle px-5 mb-3">
                        <h4>Latest from BBC News</h4>
                        </nav>
                        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-dark-subtle p-4 my-2 rounded-2" tabindex="0">
                        {BBCnews.map((x)=>
                        <>
                        <li>
                        <b id="scrollspyHeading1">{x.title}</b>
                        <p>{x.description}</p>
                        </li>
                        </>
                        )}
                        </div>
                        </>
                </div>
            </div>
        </div>
        <div className="container-fluid">
        <div className="row">
                <div className="col-lg-12 text-center p-2">
                    <h3 className="text-danger"><u>Get news by Category</u></h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <input type="text" className="form-control my-2" placeholder="Search news" onChange={searchData}/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 my-1">
                    <button className="btn btn-outline-danger mx-5 my-2 news-category-button" value="business" onClick={getNewsByCategory}>Business</button>
                    <button className="btn btn-outline-danger mx-5 my-2 news-category-button" value="entertainment" onClick={getNewsByCategory}>Entertainment</button>
                    <button className="btn btn-outline-danger mx-5 my-2 news-category-button" value="health" onClick={getNewsByCategory}>Health</button>
                    <button className="btn btn-outline-danger mx-5 my-2 news-category-button" value="science" onClick={getNewsByCategory}>Science</button>
                    <button className="btn btn-outline-danger mx-5 my-2 news-category-button" value="sports" onClick={getNewsByCategory}>Sports</button>
                    <button className="btn btn-outline-danger mx-5 my-2 news-category-button" value="technology" onClick={getNewsByCategory}>Technology</button>
                    <button className="btn btn-outline-danger mx-5 my-2 news-category-button" value="general" onClick={getNewsByCategory}>Back</button>
                </div>
            </div>
        </div>
        <div className="container-fluid news-box">
            {!selectedCategory?<div className="row">
            {generalNews.filter((y)=>y.title.includes(search)).map((x)=>
                <div className="col-lg-4 col-md-6 p-2">
                    <>
                    <div class="card d-block mx-auto" style={{width: "18rem"}}>
                        <div class="card-body news-card-body  bg-info-subtle">
                        <div className="pt-3 pb-3 mb-3 bg-danger-subtle">
                                <svg className="news-icon1 ms-4" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                                <svg className="news-icon2 mx-5" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm480-280q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0 520ZM200-480Zm480-280Z"/></svg>
                                <svg className="news-icon3" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
                        </div>
                        <h5 class="card-title">{x.title}</h5>
                        <a href={x.url} class="btn btn-outline-danger">Get News</a>
                        </div>
                    </div>
                    </>
                </div>
            )}
            </div>
            :<div className="row">
            {news.filter((y)=>y.title.includes(search)).map((x)=>
                <div className="col-lg-4 col-md-6 p-2">
                    <>
                    <div class="card d-block mx-auto" style={{width: "18rem"}}>
                        <div class="card-body news-card-body  bg-info-subtle">
                        <div className="pt-3 pb-3 mb-3 bg-danger-subtle">
                                <svg className="news-icon1 ms-4" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                                <svg className="news-icon2 mx-5" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm480-280q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0 520ZM200-480Zm480-280Z"/></svg>
                                <svg className="news-icon3" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
                        </div>
                        <h5 class="card-title">{x.title}</h5>
                        <a href={x.url} class="btn btn-outline-danger">Get News</a>
                        </div>
                    </div>
                    </>
                </div>
            )}
            </div>}
        </div>
        </>
    );
}