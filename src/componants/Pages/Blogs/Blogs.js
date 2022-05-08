import React from 'react';

const Blogs = () => {
    return (
        <div className='container text-center'>
            <h1>Difference between javascript and nodejs</h1>
            <p>1. Javascript is a higher lavel programing language.It use for create website.Node.js is a run time environment built on google v8 engine.</p>
            <p>2.JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.</p>
            <p>3.JavaScript requires any running environment as it can execute on any engine such as Firefox is spider monkey, v8 engine of google chrome, JavaScript core of Safari whereas Node.js runs only on the v8 engine of google chrome.</p>
            <p>4.JavaScript is a language that runs inside web browsers as part of the documents loaded by the browser and is used as a client side development language. It provides the behavior of the pages. Like HTML it provides the semantic structure and CSS the look and feel. NodeJs is an open source, cross platform environment that allows you to create server side applications and tools using JavaScript.</p>
            <p>5.JavaScript and its surrounding environments like Node js for web development have seen a great acceleration in recent years. Giants in the industry like eBay, Uber, Netflix are preferring Node js for web development of applications.</p>
            <h1>When should we use nodejs and when should we use mongodb</h1>
            <p>Node.js is one of the most popular environments, taking the lead for the second consecutive year.  While JavaScript is a programming language, Node.js is an ecosystem built on JS, leveraging the V8 Google server engine. V8 uses the JavaScript code to translate it into a faster machine code, readable by a computer. </p>
            <p>MongoDB is the most popular of the new breed of non-relational NoSQL databases. Specifically, it is a document database, also called a document-oriented database or a document store.
                Documents hold semistructured data, usually represented in a format like JSON or XML, and each document is associated with a unique key.
                Key values are typically a path or a URI that can be used to retrieve the associated document from the database.
                The keys are indexed, making it efficient to retrieve the associated documents.
                Document structures usually align with objects that developers are working with in code, which is a more flexible approach than the row-and-column table-oriented structure of a relational database. Developers can rework document structures as their application requirements change over time. With this approach, data structures become like code both are under developers control.
                Document databases are popular in ecommerce and securities trading platforms, among other uses, because they scale out well across multiple servers to support high data volumes and traffic.</p>

            <h1>What is the purpose of jwt and how does it work</h1>
            <p> JWT mean JSON Web Token is a JSON encoded representation of a claim that can be transferred between two parties. The claim is digitally signed by the issuer of the token, and the party receiving this token can later use this digital signature to prove the ownership on the claim.
                JWTs can be broken down into three parts: header, payload, and signature. Each part is separated from the other by dot , and will follow the below structure:
                Header.Payload.Signature</p>
            <p>JSON Web Token is an open standard for securely transmitting information between parties as JSON object.
                It is compact, readable and digitally signed using a private key or a public key pair by the Identity Provider. So the integrity and authenticity of the token can be verified by other parties involved.
                The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.
                JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn it have to completely rely on a datastore to save session information.</p>




        </div>
    );
};

export default Blogs;