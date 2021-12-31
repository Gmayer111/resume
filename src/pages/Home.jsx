import Layout from 'components/UI/Layout'
import React from 'react'
import 'assets/Styles/Layout.scss'
import 'assets/Styles/Home.scss'

const Home = () => {
    return (
        <Layout>
            <main>
                <div class="imgContainer">
                    <div class="blockTitle">
                        <h1>
                            <span class="firstName">GAEL</span>
                            <span class="lastName"> MAYER</span>
                        </h1>
                        <p>
                            <span>Je suis </span>
                            <span>
                                <b class="text">Développeur Web</b>
                            </span>
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Home
