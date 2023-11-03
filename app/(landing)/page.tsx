"use client";

import React, { useState } from 'react';
import Image from 'next/image';



const LandingPage = () => {
  const [backgroundClassName] = useState('background-container');

  return (
    <div className="auth-layout">
      <div className="centered-container">
        <div className={`blur-container ${backgroundClassName}`}>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
      </div>
      <div>
        <meta charSet="utf-8" />
        <title>EixAi - Your Ai Tools</title>
        <meta
          content="World-class security and compliance infrastructure that seamlessly integrates into your existing workflows."
          name="description"
        />
        <meta
          content="width=device-width, initial-scale=1, user-scalable=yes"
          name="viewport"
        />
        <meta
          content="#ee33ee"
          name="theme-color"
        />
        <link
          href="images/Logo(s).svg"
          rel="icon"
          type="image/png"
        />
        <link
          data-n-g=""
          href="css/style2.css"
          rel="stylesheet"
        />
        <link
          data-n-p=""
          href="css/style.css"
          rel="stylesheet"
        />
        <meta
          content="23"
          name="next-head-count"
        />
        <meta
          content="no-store, no-cache, must-revalidate"
          httpEquiv="Cache-Control"
        />
        <link
          as="font"
          crossOrigin="anonymous"
          href="fonts/font1.woff2"
          rel="preload"
          type="font/woff2"
        />
        <link
          as="style"
          href="css/style2.css"
          rel="preload"
        />

        <link
          as="style"
          href="css/style.css"
          rel="preload"
        />

        <link
          href="/manifest.json"
          rel="manifest"
        />
        <div id="__next">
          <div style={{}} />
          <header className="Header_header__pXml_" data-light-theme="false">
            <Image alt="Logo" className="Header_logo__sUWiP" height="100" src="images/Logo.svg" width="100" />
            <Image alt='logo' className="Header_logoMobile__MEikt" height="100" src="images/Logo.svg" width="100" />
            <nav aria-label="Main" className="Navigation_navigation__SaCR1" data-orientation="horizontal" dir="ltr">
              <div className="Navigation_island__hx7CL">
                <div style={{ position: 'relative' }}>
                  <ul className="Navigation_navbar__drXfa" data-orientation="horizontal" dir="ltr">
                    <li className="Navigation_item__hApMP">
                      <a className="Navigation_link__p_0Vi" data-radix-collection-item="" href="index.html">
                        Home
                      </a>
                    </li>
                    <li className="Navigation_item__hApMP">
                      <a className="Navigation_link__p_0Vi" data-radix-collection-item="" href="#">
                        Customers
                      </a>
                    </li>
                    <li className="Navigation_item__hApMP">
                      <a className="Navigation_link__p_0Vi" data-radix-collection-item="" href="#">
                        Pricing
                      </a>
                    </li>
                    <li className="Navigation_item__hApMP">
                      <a className="Navigation_link__p_0Vi" data-radix-collection-item="" href="#">
                        Docs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="Navigation_viewportPosition__zEjBF" />
            </nav>
            <div className="Header_group__Kgpdq">
              <a
                className="Button_container__i_Vit hide-on-mobile"
                data-pulse="false"
                data-size="regular"
                data-type="transparent"
                href="https://elio-ai-saas.vercel.app/sign-in?redirect_url=https%3A%2F%2Felio-ai-saas.vercel.app%2Fdashboard"
              >
                Log in
              </a>
              <a
                className="Button_container__i_Vit"
                data-pulse="false"
                data-size="regular"
                data-type="primary"
                href="https://elio-ai-saas.vercel.app/sign-in?redirect_url=https%3A%2F%2Felio-ai-saas.vercel.app%2Fdashboard"
              >
                Explore Demo
              </a>
              <button className="Header_hamburger__X_hhy">
                <svg fill="none" height="12" viewBox="0 0 14 12" width="14">
                  <path d="M0 1H14" stroke="white" />
                  <path d="M0 6H14" stroke="white" />
                  <path d="M0 11H14" stroke="white" />
                </svg>
              </button>
            </div>
            <div className="menu">
              <button className="close-button">
                Close
              </button>
              <ul>
                <li>
                  <a href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a href="https://webeliox.com">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="https://webeliox.com">
                    Services
                  </a>
                </li>
                <li>
                  <a href="https://webeliox.com">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="https://webeliox.com">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </header>
          <div className="Layout_layout__6J70X">

            <main className="Layout_main__k2ohw">

              <div className="Home_container__Fqt_9">

                <div className="Hero_container__I589b">

                  <div className="Hero_gradientWrapper__W5Hg_">

                    <div className="Hero_maxWidthWrapper__nfQ3Q Home_maxWidth__uUqbF">

                      <div className="Hero_textWrapper__QPzbE">

                        <h1>
                          Enhance conversations with AI Chat and Tools
                        </h1>

                        <p>
                          Experience the Future of Communication and Creativity with AI. Our SaaS platform enhances conversations and supercharges visual content creation, making it easier than ever to engage and                    captivate your audience.
                        </p>

                        <div>
                          <a
                            className="Button_container__i_Vit"
                            data-pulse="false"
                            data-size="large"
                            data-type="primary"
                            href="https://elio-ai-saas.vercel.app/sign-in?redirect_url=https%3A%2F%2Felio-ai-saas.vercel.app%2Fdashboard"
                          >
                            Explore Demo
                          </a>
                          <a
                            className="Button_container__i_Vit"
                            data-pulse="false"
                            data-size="large"
                            data-type="transparent"
                            href="https://elio-ai-saas.vercel.app/sign-up?redirect_url=https%3A%2F%2Felio-ai-saas.vercel.app%2Fdashboard"
                            target="_blank"
                          >
                            Try for                      free
                          </a>
                        </div>

                      </div>

                      <div className="Hero_aspectWrapper">

                      </div>

                    </div>

                  </div>

                </div>

                <div className="Logos_container__04_qv">

                  <div className="Logos_maxWidthWrapper__sVy_G Home_maxWidth__uUqbF">

                    <div className="Logos_logoGrid___OFR7">

                      <Image
                        alt="logo1"
                        height="100"
                        src="images/logos/humaans.svg"
                        width="100"
                      />

                      <Image
                        alt="logo2"
                        height="100"
                        src="images/logos/ness.svg"
                        width="100"
                      />

                      <Image
                        alt="logo3"
                        height="100"
                        src="images/logos/okra.svg"
                        width="100"
                      />

                      <Image
                        alt="logo4"
                        height="100"
                        src="images/logos/resly.svg"
                        width="100"
                      />

                      <Image
                        alt="logo5"
                        height="100"
                        src="images/logos/safety-wing.svg"
                        width="100"
                      />

                      <Image
                        alt="logo6"
                        height="100"
                        src="images/logos/sorare.svg"
                        width="100"
                      />

                      <Image
                        alt="logo7"
                        height="100"
                        src="images/logos/stitch.svg"
                        width="100"
                      />

                      <Image
                        alt="logo8"
                        height="100"
                        src="images/logos/unqork.svg"
                        width="100"
                      />

                      <Image
                        alt="logo9"
                        height="100"
                        src="images/logos/visa.svg"
                        width="100"
                      />

                      <Image
                        alt="logo10"
                        height="100"
                        src="images/logos/vital.svg"
                        width="100"
                      />

                    </div>

                  </div>

                </div>

                <div className="Solutions_container__XOLFH">

                  <div className="Solutions_gradientWrapper__SfS_W">

                    <div className="Solutions_maxWidthWrapper__mT1pE Home_maxWidth__uUqbF">

                      <h2>
                        Unlock the Potential:
                      </h2>

                      <h2 className="ppelio">
                        See Our AI SaaS in Action
                      </h2>

                      <div className="modern-video-player">
                        <Image
                          alt="App Screenshot"
                          height={100}
                          loading="lazy"
                          src="/images/thub.jpg"
                          width={100}
                        />
                      </div>

                    </div>

                  </div>

                </div>

                <div className="Features_container__Cb2SR">

                  <div className="Features_maxWidthWrapper__hDSPE">

                    <div className="Features_heading__0Kk_5">

                      <h2
                        className="styles_text__Fvsk7"
                        style={{
                          '--width': '70%'
                        } as React.CSSProperties}
                      >

                        Why trust us?
                      </h2>

                      <p className="Features_subHeading__N7HnS">
                        Evervault is secure by default. We build, manage, and implement                  security best practices into the platform so you don&apos;t have to.
                      </p>

                    </div>

                    <div>

                      <div>

                        <div className="Features_titleContainer__p9cmI" />

                        <div className="Features_divider__1WGjU" />

                        <div className="Features_features__aEjtw">

                          <div>

                            <div className="Features_featureTitle__oyjT_">
                              <svg
                                className="lucide lucide-cog"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >

                                <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />

                                <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />

                                <path d="M12 2v2" />

                                <path d="M12 22v-2" />

                                <path d="m17 20.66-1-1.73" />

                                <path d="M11 10.27 7 3.34" />

                                <path d="m20.66 17-1.73-1" />

                                <path d="m3.34 7 1.73 1" />

                                <path d="M14 12h8" />

                                <path d="M2 12h2" />

                                <path d="m20.66 7-1.73 1" />

                                <path d="m3.34 17 1.73-1" />

                                <path d="m17 3.34-1 1.73" />

                                <path d="m11 13.73-4 6.93" />

                              </svg>

                              <h3>
                                Fundamentally Configurable
                              </h3>

                            </div>

                            <p>
                              Evervault products work together and can be adapted to any type of solution.
                            </p>

                          </div>

                          <div>

                            <div className="Features_featureTitle__oyjT_">
                              <svg
                                className="lucide lucide-timer"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >

                                <line
                                  x1="10"
                                  x2="14"
                                  y1="2"
                                  y2="2"
                                />

                                <line
                                  x1="12"
                                  x2="15"
                                  y1="14"
                                  y2="11"
                                />

                                <circle
                                  cx="12"
                                  cy="14"
                                  r="8"
                                />

                              </svg>

                              <h3>
                                Ultra-Low Latency
                              </h3>

                            </div>

                            <p>
                              Encryption and decryption operations introduce a minimal latency penalty.
                            </p>

                          </div>

                          <div>

                            <div className="Features_featureTitle__oyjT_">
                              <svg
                                className="lucide lucide-git-merge"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >

                                <circle
                                  cx="18"
                                  cy="18"
                                  r="3"
                                />

                                <circle
                                  cx="6"
                                  cy="6"
                                  r="3"
                                />

                                <path d="M6 21V9a9 9 0 0 0 9 9" />

                              </svg>

                              <h3>
                                Write and Deploy in Seconds
                              </h3>

                            </div>

                            <p>
                              Built so developers spend less time and money on data security and compliance.
                            </p>

                          </div>

                        </div>

                      </div>

                      <div>

                        <div className="Features_titleContainer__p9cmI" />

                        <div className="Features_divider__1WGjU" />

                        <div className="Features_features__aEjtw">

                          <div>

                            <div className="Features_featureTitle__oyjT_">
                              <svg
                                className="lucide lucide-shield"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >

                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />

                              </svg>

                              <h3>
                                Dual Security Model
                              </h3>

                            </div>

                            <p>
                              We store encryption keys, you store data as you normally would — but fully encrypted.
                            </p>

                          </div>

                          <div>

                            <div className="Features_featureTitle__oyjT_">
                              <svg
                                className="lucide lucide-file-check"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >

                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />

                                <polyline points="14 2 14 8 20 8" />

                                <path d="m9 15 2 2 4-4" />

                              </svg>

                              <h3>
                                Compliance
                              </h3>

                            </div>

                            <p>
                              We’re fully compliant under PCI DSS, HIPAA, GDPR and SOC2.
                            </p>

                          </div>

                          <div>

                            <div className="Features_featureTitle__oyjT_">
                              <svg
                                className="lucide lucide-box"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >

                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">

                                </path>

                                <polyline points="3.29 7 12 12 20.71 7" />

                                <line
                                  x1="12"
                                  x2="12"
                                  y1="22"
                                  y2="12"
                                />

                              </svg>

                              <h3>
                                Enclave-backed
                              </h3>

                            </div>

                            <p>
                              Built on isolated, hardened, and highly constrained secure enclaves.
                            </p>

                          </div>

                        </div>

                      </div>

                      <div>

                        <div className="Features_titleContainer__p9cmI" />

                        <div className="Features_divider__1WGjU" />

                        <div className="Features_features__aEjtw">

                          <div>

                            <div className="Features_featureTitle__oyjT_">
                              <svg
                                className="lucide lucide-cpu"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >

                                <rect
                                  height="16"
                                  rx="2"
                                  width="16"
                                  x="4"
                                  y="4"
                                />

                                <rect
                                  height="6"
                                  width="6"
                                  x="9"
                                  y="9"
                                />

                                <path d="M15 2v2" />

                                <path d="M15 20v2" />

                                <path d="M2 15h2" />

                                <path d="M2 9h2" />

                                <path d="M20 15h2" />

                                <path d="M20 9h2" />

                                <path d="M9 2v2" />

                                <path d="M9 20v2" />

                              </svg>

                              <h3>
                                Volume
                              </h3>

                            </div>

                            <p>
                              Evervault processes millions of encryption operations every day.
                            </p>

                          </div>

                          <div>

                            <div className="Features_featureTitle__oyjT_">
                              <svg
                                className="lucide lucide-globe2"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >

                                <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />

                                <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17">

                                </path>

                                <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2h3.05" />

                                <circle
                                  cx="12"
                                  cy="12"
                                  r="10"
                                />

                              </svg>

                              <h3>
                                Globally Distributed
                              </h3>

                            </div>

                            <p>
                              Evervault resources are deployed in multiple regions to optimize uptime.
                            </p>

                          </div>

                          <div>

                            <div className="Features_featureTitle__oyjT_">
                              <svg
                                className="lucide lucide-line-chart"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                              >

                                <path d="M3 3v18h18" />

                                <path d="m19 9-5 5-4-4-3 3" />

                              </svg>

                              <h3>
                                Scalable Pricing
                              </h3>

                            </div>

                            <p>
                              Affordable, scalable pricing where you only get charged for what you use.
                            </p>

                          </div>

                        </div>

                      </div>

                    </div>

                    <div className="Cta_maxWidthWrapper__su_4C">

                      <div
                        className="Cta_textWrapper__d5r6y"
                        style={{
                          '--max-width': '600px'
                        } as React.CSSProperties}
                      >


                        <h3 className="styles_text__Fvsk7">
                          Encrypt, Process, Share.
                        </h3>

                        <p>
                          The encryption platform for developers who have better ways to spend their time.
                        </p>

                        <div>
                          <a
                            className="Button_container__i_Vit"
                            data-pulse="false"
                            data-size="large"
                            data-type="primary"
                            href="https://elio-ai-saas.vercel.app/sign-in?redirect_url=https%3A%2F%2Felio-ai-saas.vercel.app%2Fdashboard"

                          >
                            Request a demo
                          </a>
                          <a
                            className="Button_container__i_Vit"
                            data-pulse="false"
                            data-size="large"
                            data-type="transparent"
                            href="https://elio-ai-saas.vercel.app/sign-in?redirect_url=https%3A%2F%2Felio-ai-saas.vercel.app%2Fdashboard"
                          >
                            Try for free
                          </a>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </main>

          </div>

          <footer
            className="Footer_footer__o4_Ec"
            role="contentinfo"
          >

            <div className="Footer_container__Mn8SS container">
              <Image
                alt="Logo"
                className="Footer_logo__ZNv_V"
                height="100"
                src="images/logo-text.svg"
                width="100"
              />

              <div className="Footer_navigation__Yj_7L">

                <ul className="Footer_list__FsWR4">

                  <li>
                    Company
                  </li>

                  <li>
                    <a href="#">
                      Blog
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      Careers
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      Pricing
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      Customers
                    </a>
                  </li>

                </ul>

                <ul className="Footer_list__FsWR4">

                  <li>
                    Resources
                  </li>

                  <li>
                    <a href="#">
                      Documentation
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      Papers
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      Press
                    </a>
                  </li>

                </ul>

                <ul className="Footer_list__FsWR4">

                  <li>
                    Legal
                  </li>

                  <li>
                    <a href="#">
                      Terms of Service
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      Cookies Policy
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      Data Processing
                    </a>
                  </li>

                </ul>

                <ul className="Footer_list__FsWR4">

                  <li>
                    Compliance
                  </li>

                  <li className="Footer_complianceLink__QDmX8">
                    <Image
                      alt="eixaiLogo"
                      height="15"
                      src="images/Logo(s).svg"
                      width="15"
                    />
                    <a href="#">
                      EixAi
                    </a>
                  </li>

                  <li className="Footer_complianceLink__QDmX8">
                    <Image
                      alt="webelioxLogo"
                      height="15"
                      src="images/icon-white.svg"
                      width="15"
                    />
                    <a href="https://Webeliox.com">
                      Webeliox
                    </a>
                  </li>

                </ul>

              </div>

            </div>

            <div className="Footer_copyright__sqw0C">

              <div className="Footer_copyrightContent__aDxfB container">

                <p>
                  © 2023{' '}
                  <a
                    className="Fotter_potofolio"
                    href="https://github.com/elioar"
                    target="_blank"
                  >
                    Elio.Dev{' '}
                  </a>

                  <br className="Footer_copyrightBreak__yeGun" />
                  All rights reserved.
                </p>

                <a
                  className="Footer_status__X2ZDd"
                  href="https://github.com/elioar"
                >

                  <p>
                    Look my Portfolio.
                  </p>

                </a>

              </div>

            </div>

          </footer>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
