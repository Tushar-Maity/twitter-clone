import React, {useState} from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Tushar Maity",
            userName: "maity_tushar_989",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://cdn.pixabay.com/photo/2019/03/21/05/27/flower-4070280_960_720.jpg"
        });
        setTweetMessage("");
        setTweetImage("");
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                <Avatar src="https://cdn.pixabay.com/photo/2020/10/14/12/01/turan-annual-5654158_960_720.jpg"/>
                <input 
                onChange={(e) => setTweetMessage(e.target.value)}
                value={tweetMessage} placeholder="What's happening?" type="text"/>
                
                </div>
                <input 
                onChange={(e) => setTweetImage(e.target.value)}
                value={tweetImage}
                className="tweetBox__imageInput" placeholder="Optional: Enter image URL" type="text"/>



                <Button 
                onClick={sendTweet}
                type="submit"
                className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
