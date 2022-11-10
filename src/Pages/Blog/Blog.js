import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="70326c9b-4a0f-429b-9c76-792941e326d5"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">Most Common Questions </span>
                            </span>{' '}
                            of SQL & NoSQL, JS, NodeJs, JWT
                        </h2>
                    </div>
                </div>
                <div className="max-w-screen-xl sm:mx-auto">
                    <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
                        <div className="space-y-8">
                            <div>
                                <p className="mb-4 text-xl md:text-3xl md:font-bold font-medium">
                                    Difference between SQL and NoSQL
                                </p>
                                <p className="text-black text-start">
                                    SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them).
                                    <br />
                                    <br />
                                    NoSQL is a non-relational DMS, that does not require a fixed schema, avoids joins, and is easy to scale. NoSQL database is used for distributed data stores with humongous data storage needs.
                                    <br /> <br />
                                    NoSQL is used for Big data and real-time web apps. For example companies like Twitter, Facebook, Google that collect terabytes of user data every single day
                                </p>
                            </div>
                            <div>
                                <p className="mb-4 text-xl md:text-3xl md:font-bold font-medium">
                                    What is JWT, and how does it work?
                                </p>
                                <p className="text-black text-start">
                                    JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.
                                    <br /> <br />
                                    It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.
                                    <br /> <br />
                                    This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
                                    <br /> <br />
                                    Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
                                </p>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <p className="mb-4 text-xl md:text-3xl md:font-bold font-medium">
                                    What is the difference between javascript and NodeJS?
                                </p>
                                <p className="text-black text-start">
                                    NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                                    <br />
                                    <br />
                                    Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                                    <br /><br />
                                    Javascript is a programming language that is used for writing scripts on the website. And NodeJS is a Javascript runtime environment. Javascript can only be run in the browsers. On the other hand, We can run Javascript outside the browser with the help of NodeJS.
                                </p>
                            </div>
                            <div>
                                <p className="mb-4 text-xl md:text-3xl md:font-bold font-medium">
                                    How does NodeJS handle multiple requests at the same time?
                                </p>
                                <p className="text-black text-start">
                                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                                    <br />
                                    <br />
                                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                                    <br /> <br />
                                    Explanation: If your system has 8 CPU then 8 NodeJS instances will be created and every instance has its own independent event loop. Now NodeJS can process all request parallelly.

                                    They are all share same port (PORT 3000) but not state. The master process listens on a port, accepts new connections and distributes them across the workers in a round-robin fashion, with some built-in smarts to avoid overloading a worker process.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;