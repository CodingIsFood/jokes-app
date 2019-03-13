import React from "react";

const JokesProps = (props) => (
<h3 className="JokesProps">  
	<p style={{display: props.question ? "black" :"none"}}> Question: {props.question}</p>
	<p>Punchline: {props.punchline}</p>
</h3>
);

export default JokesProps;