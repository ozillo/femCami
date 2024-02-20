import React, { useState } from "react";
import "./Board.css";

export const Board = () => {
    return (
        <>
            <div className="wrapper">
                <div className="post-it-note postit-note-yellow" id="note-1">
                    <div className="pin pin-black"></div>

                    <h1>
                        <br />
                        Ques es l'autisme?
                    </h1>

                    <p>
                        Share who you want to teach the web to here (ie,
                        friends, family, colleagues...)
                    </p>
                </div>

                <div className="post-it-note postit-note-red" id="note-2">
                    <div className="pin pin-black"></div>

                    <h1>
                        <br />
                        What to teach?
                    </h1>

                    <p>
                        Share what you want to teach here ie web design w/
                        Thimble, vide editing w/ Popcorn, webpage hacking w/
                        XRay Goggles...
                    </p>
                </div>

                <div className="post-it-note postit-note-blue" id="note-3">
                    <div className="pin pin-black"></div>

                    <h1>
                        <br />
                        Turn it into a party!
                    </h1>

                    <p>
                        How will you keep things interesting? (ie hands-on
                        participation, discussion, live-coding, balloons!)
                    </p>
                </div>

                <div className="post-it-note postit-note-green" id="note-4">
                    <div className="pin pin-black"></div>

                    <h1>
                        <br />
                        Turn it into a party!
                    </h1>

                    <p>
                        How will you keep things interesting? (ie hands-on
                        participation, discussion, live-coding, balloons!)
                    </p>
                </div>
                {/* <figure className="polaroid" id="picture-1">
          <div className="pin red"></div><img alt="My Holiday"  src="https://sites.google.com/site/carolinacsfirst/unit/home/websites/myholiday.jpg"/>
    
          <figcaption>
            --&gt; I like this #TeachTheWeb room setup
          </figcaption>
        </figure> */}

                {/* <figure className="polaroid" id="picture-2">
          <div className="pin blue"></div><img alt="Mozilla Festival Japan pic" src="https://e48aadac-a-62cb3a1a-s-sites.googlegroups.com/site/carolinacsfirst/unit/home/websites/makerparty.jpg"/>
    
          <figcaption>
            Here's us after a maker party in Japan!
          </figcaption>
        </figure> */}
            </div>
        </>
    );
};
