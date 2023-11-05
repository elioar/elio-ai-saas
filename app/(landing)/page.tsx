"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import "./style.css";
import { motion } from "framer-motion";

const LandingPage = () => {
  const [backgroundClassName] = useState("background-container");
  const { isSignedIn } = useAuth();

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
        <meta content="#ee33ee" name="theme-color" />
        <link href="images/Logo(s).svg" rel="icon" type="image/png" />

        <meta content="23" name="next-head-count" />
        <meta
          content="no-store, no-cache, must-revalidate"
          httpEquiv="Cache-Control"
        />

        <link href="/manifest.json" rel="manifest" />
        <div id="__next">
          <div />
          <header className="Header_header__pXml_" data-light-theme="false">
            <Image
              alt="Logo"
              className="Header_logo__sUWiP"
              height="100"
              src="images/Logo.svg"
              width="100"
            />
            <Image
              alt="logo"
              className="Header_logoMobile__MEikt"
              height="100"
              src="images/Logo.svg"
              width="100"
            />
            <nav
              aria-label="Main"
              className="Navigation_navigation__SaCR1"
              data-orientation="horizontal"
              dir="ltr"
            >
              <div className="Navigation_island__hx7CL">
                <div style={{ position: "relative" }}>
                  <ul
                    className="Navigation_navbar__drXfa"
                    data-orientation="horizontal"
                    dir="ltr"
                  >
                    <li className="Navigation_item__hApMP">
                      <a
                        className="Navigation_link__p_0Vi"
                        data-radix-collection-item=""
                        href="index.html"
                      >
                        Home
                      </a>
                    </li>
                    <li className="Navigation_item__hApMP">
                      <a
                        className="Navigation_link__p_0Vi"
                        data-radix-collection-item=""
                        href="#"
                      >
                        Customers
                      </a>
                    </li>
                    <li className="Navigation_item__hApMP">
                      <a
                        className="Navigation_link__p_0Vi"
                        data-radix-collection-item=""
                        href="#"
                      >
                        Pricing
                      </a>
                    </li>
                    <li className="Navigation_item__hApMP">
                      <a
                        className="Navigation_link__p_0Vi"
                        data-radix-collection-item=""
                        href="#"
                      >
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
                href={isSignedIn ? "/dashboard" : "/sign-in"}
              >
                Log in
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
              >
                <a
                  className="Button_container__i_Vit"
                  data-pulse="false"
                  data-size="regular"
                  data-type="primary"
                  href={isSignedIn ? "/dashboard" : "/sign-up"}
                >
                  Sign Up
                </a>
              </motion.button>
              <button
                className="Header_hamburger__X_hhy"
                aria-label="Open Menu"
              >
                <svg fill="none" height="12" viewBox="0 0 14 12" width="14">
                  <path d="M0 1H14" stroke="white" />
                  <path d="M0 6H14" stroke="white" />
                  <path d="M0 11H14" stroke="white" />
                </svg>
              </button>
            </div>
          </header>
          <div className="Layout_layout__6J70X">
            <main className="Layout_main__k2ohw">
              <div className="Home_container__Fqt_9">
                <div className="Hero_container__I589b">
                  <div className="Hero_gradientWrapper__W5Hg_">
                    <div className="Hero_maxWidthWrapper__nfQ3Q Home_maxWidth__uUqbF">
                      <div className="Hero_textWrapper__QPzbE">
                        <h1>Enhance conversations with AI Chat and Tools</h1>

                        <p>
                          Experience the Future of Communication and Creativity
                          with AI. Our SaaS platform enhances conversations and
                          supercharges visual content creation, making it easier
                          than ever to engage and captivate your audience.
                        </p>

                        <div>
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <a
                              className="Button_container__i_Vit"
                              data-pulse="false"
                              data-size="large"
                              data-type="primary"
                              href={isSignedIn ? "/dashboard" : "/sign-in"}
                            >
                              Explore Demo
                            </a>
                          </motion.button>

                          <a
                            className="Button_container__i_Vit"
                            data-pulse="false"
                            data-size="large"
                            data-type="transparent"
                            href={isSignedIn ? "/dashboard" : "/sign-up"}
                            target="_blank"
                          >
                            Join Now
                          </a>
                        </div>
                      </div>
                      <div className="mockup">
                        <Image
                          alt="logo1"
                          height="510"
                          src="/images/iphone15pro.png"
                          width="250"
                        />
                      </div>
                      <div className="Hero_aspectWrapper"></div>
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
                      <h2>Unlock the Potential:</h2>

                      <h2 className="ppelio">See Our AI SaaS in Action</h2>

                      <div className="modern-video-player">
                        <Image
                          alt="App Screenshot"
                          height="1000"
                          loading="lazy"
                          src="/images/thub.jpg"
                          width="1000"
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
                        style={
                          {
                            "--width": "70%",
                          } as React.CSSProperties
                        }
                      >
                        Why use AI?
                      </h2>

                      <p className="Features_subHeading__N7HnS">
                        Explore the AI advantage: Unlock the potential of
                        artificial intelligence to improve your results.
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
                                className="your-chat-icon-class"
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
                                <path d="M15 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11l4 3V5a2 2 0 0 0-2-2z" />
                              </svg>

                              <h3>AI Chat</h3>
                            </div>

                            <p>
                              Personalize interactions with our AI
                              chatbot.Customize AI chat interactions for
                              engaging conversations.
                            </p>
                          </div>

                          <div>
                            <div className="Features_featureTitle__oyjT_">
                              <svg
                                className="lucide lucide-image"
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
                                  x="3"
                                  y="3"
                                  width="18"
                                  height="18"
                                  rx="2"
                                  ry="2"
                                />

                                <circle cx="8.5" cy="8.5" r="1.5" />

                                <polyline points="21 15 16 10 5 21" />
                              </svg>

                              <h3>Image Generation</h3>
                            </div>

                            <p>
                              Effortlessly craft captivating visuals with our
                              user-friendly AI image generator.
                            </p>
                          </div>

                          <div>
                            <div className="Features_featureTitle__oyjT_">
                              <svg
                                className="lucide lucide-code"
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
                                <polyline points="16 18 22 12 16 6" />

                                <polyline points="8 6 2 12 8 18" />

                                <line x1="12" x2="12" y1="2" y2="22" />
                              </svg>

                              <h3>Code Generation</h3>
                            </div>

                            <p>
                              Generate code snippets for your projects
                              efficiently.
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
                                className="lucide lucide-video"
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
                                <polygon points="23 7 16 12 23 17 23 7" />

                                <rect height="14" width="14" x="1" y="5" />
                              </svg>

                              <h3>Video Generation</h3>
                            </div>

                            <p>
                              Streamline video production with our user-friendly
                              tools, creating stunning and polished videos
                              effortlessly.
                            </p>
                          </div>

                          <div>
                            <div className="Features_featureTitle__oyjT_">
                              <svg
                                className="your-music-icon-class"
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
                                <path d="M9 18V5l12-2v13" />
                                <circle cx="6" cy="18" r="3" />
                                <circle cx="18" cy="16" r="3" />
                              </svg>

                              <h3>Music Generation</h3>
                            </div>

                            <p>
                              Effortlessly compose music that perfectly
                              complements your content, tailored to your unique
                              style and needs.
                            </p>
                          </div>

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

                              <h3>Security</h3>
                            </div>

                            <p>
                              Your data is fully secured and private with our
                              robust security measures.
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
                                className="your-lightning-icon-class"
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
                                <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
                              </svg>

                              <h3>Fast AI</h3>
                            </div>

                            <p>
                              Experience our AI&apos;s remarkable speed, providing
                              quick and efficient results.{" "}
                            </p>
                          </div>

                          <div>
                            <div className="Features_featureTitle__oyjT_">
                              <svg
                                className="your-puzzle-piece-icon-class"
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
                                <path d="M18 2a2 2 0 0 0-2 2h-1.18a2 2 0 0 0-1.09.32l-2.85 1.9-2.62-1.94a4 4 0 0 0-4.12 0L6.12 6.22a4 4 0 0 0-2.07-.57H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1.09a4 4 0 0 0-.32-1.09l-1.9-2.85 1.94-2.62a4 4 0 0 0 0-4.12l-1.94-2.62 1.9-2.85a4 4 0 0 0 .32-1.09z" />
                              </svg>

                              <h3>Intelligent AI</h3>
                            </div>

                            <p>
                              Embrace smart AI that adapts and learns to enhance
                              your experience.
                            </p>
                          </div>

                          <div>
                            <div className="Features_featureTitle__oyjT_">
                              <svg
                                className="your-dollar-icon-class"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <text
                                  x="4"
                                  y="18"
                                  fontSize="16"
                                  fill="currentColor"
                                >
                                  $
                                </text>
                              </svg>

                              <h3>Low Price</h3>
                            </div>

                            <p>
                              Enjoy our cost-effective pricing model for your
                              budget-friendly needs.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="Cta_maxWidthWrapper__su_4C">
                      <div
                        className="Cta_textWrapper__d5r6y"
                        style={
                          {
                            "--max-width": "600px",
                          } as React.CSSProperties
                        }
                      >
                        <h3 className="styles_text__Fvsk7">
                        Leverage, Appreciate   , Share.
                        </h3>

                        <p>
                        Leverage the power of AI, appreciate its benefits, and promote it with others.
                        </p>

                        <div>
                          <a
                            className="Button_container__i_Vit"
                            data-pulse="false"
                            data-size="large"
                            data-type="primary"
                            href={isSignedIn ? "/dashboard" : "/sign-in"}
                          >
                            Explore Demo
                          </a>
                          <a
                            className="Button_container__i_Vit"
                            data-pulse="false"
                            data-size="large"
                            data-type="transparent"
                            href="https://elio-ai-saas.vercel.app"
                          >
                            Share
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>

          <footer className="Footer_footer__o4_Ec" role="contentinfo">
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
                  <li>Company</li>

                  <li>
                    <a href="#">Blog</a>
                  </li>

                  <li>
                    <a href="#">Careers</a>
                  </li>

                  <li>
                    <a href="#">Pricing</a>
                  </li>

                  <li>
                    <a href="#">Customers</a>
                  </li>
                </ul>

                <ul className="Footer_list__FsWR4">
                  <li>Resources</li>

                  <li>
                    <a href="#">Documentation</a>
                  </li>

                  <li>
                    <a href="#">Papers</a>
                  </li>

                  <li>
                    <a href="#">Press</a>
                  </li>
                </ul>

                <ul className="Footer_list__FsWR4">
                  <li>Legal</li>

                  <li>
                    <a href="#">Terms of Service</a>
                  </li>

                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>

                  <li>
                    <a href="#">Cookies Policy</a>
                  </li>

                  <li>
                    <a href="#">Data Processing</a>
                  </li>
                </ul>

                <ul className="Footer_list__FsWR4">
                  <li>Compliance</li>

                  <li className="Footer_complianceLink__QDmX8">
                    <Image
                      alt="eixaiLogo"
                      height="15"
                      src="images/Logo(s).svg"
                      width="15"
                    />
                    <a href="#">EixAi</a>
                  </li>

                  <li className="Footer_complianceLink__QDmX8">
                    <Image
                      alt="webelioxLogo"
                      height="15"
                      src="images/icon-white.svg"
                      width="15"
                    />
                    <a href="https://Webeliox.com">Webeliox</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="Footer_copyright__sqw0C">
              <div className="Footer_copyrightContent__aDxfB container">
                <p>
                  © 2023{" "}
                  <a
                    className="Fotter_potofolio"
                    href="https://github.com/elioar"
                    target="_blank"
                  >
                    Elio.Dev{" "}
                  </a>
                  <br className="Footer_copyrightBreak__yeGun" />
                  All rights reserved.
                </p>

                <a
                  className="Footer_status__X2ZDd"
                  href="https://github.com/elioar"
                >
                  <p>Look my Portfolio.</p>
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