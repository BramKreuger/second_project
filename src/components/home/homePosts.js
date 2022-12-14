import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../store/utils/thunks";
import Masonry from "react-masonry-css";
import Moment from "react-moment";

import { Button, spinner } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const HomePosts = () => {
    const HomePosts = useSelector((state) => state.posts)
    const dispatch = useDispatch();

    useEffect(() => {
        if(HomePosts.articles.items.length <= 0 ){
            dispatch(fetchPosts({page:1, order:"desc", limit:"6"}))
        }        
    },[])
    
    return(
        <>
            <Masonry 
                breakpointCols={{default:3,800:2,400:1}}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >                
                { HomePosts.articles ?
                    HomePosts.articles.items.map((item)=>(
                        <div key={item.id}>
                            <img
                                style={{width:'100%', height:'200px'}}
                                src={`${item.image}?${item.id}`}
                                alt='some pic'
                            />
                            <div className="author">
                                <span>{item.author}-</span>
                                <Moment format="DD MMMM">{item.createdAt}</Moment>
                            </div>
                            <div className="content">
                                <div className="title">{item.title}</div>
                                <div className="excerpt">{item.excerpt}</div>
                                <LinkContainer to={`/article/${item.id}`} className="mt-3">
                                    <Button variant='light'>Read more</Button>
                                </LinkContainer>
                            </div>
                        </div>
                    ))
                :null}

            </Masonry>
        </>
    )
}

export default HomePosts;