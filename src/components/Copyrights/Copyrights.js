import React, { useState } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

const Copyrights = (props) => {
  const [state, setState] = useState({
    title: "Copyrights",
  });
  const { title } = state;

  /**
   * Need Help
   */
  const NeedHelp = [
    { needhelp: "Rental FAQs", needhelp_route: "/rentalfaqs" },
    { needhelp: "Payment & Delivery", needhelp_route: "/paymentanddelivery" },
    { needhelp: "Refunds", needhelp_route: "/returnsandrefunds" },
  ];
  const { needhelp, needhelp_route } = NeedHelp;

  return (
    <div>
      <div style={{ backgroundColor: "#f3f3f3" }}>
        <Header />
        <div className="container col-9 headerText pt-2 mt-5">
          <h1 className="display-4 text-center text-uppercase font-size-10">
            {title}
          </h1>
          <hr />
        </div>
        <div className="row mt-5 py-3 mb-5 mr-auto">
          <div class="offset-md-2"></div>
          <div
            className="col-8 p-4 my-3  h-100"
            style={{ backgroundColor: "white", borderTop: "2px solid black" }}
          >
            <h5 className="font-weight-normal mt-2 text-justify font-size-3">
              1. Acceptance The Use Of Lorem Ipsum Terms and Conditions
            </h5>
            <p className="text-muted text-justify mt-2 font-size-1">
              Your access to and use of Lorem Ipsum (the app) is subject
              exclusively to these Terms and Conditions. You will not use the
              app for any purpose that is unlawful or prohibited by these Terms
              and Conditions. By using the app you are fully accepting the
              terms, conditions and disclaimers contained in this notice. If you
              do not accept these Terms and Conditions you must immediately stop
              using the app.
            </p>
            <br />

            <h5 className="font-weight-normal mt-2 text-justify font-size-3">
              2. CREDIT CARD DETAILS
            </h5>
            <p className="text-muted text-justify mt-2 font-size-1">
              All Lorem Ipsum purchases are managed by the individual App Stores
              (Apple, Google Windows) and Lorem Ipsum will never store your
              credit card information or make it available to any third parties.
              Any purchasing information provided will be provided directly from
              you to the respective App Store and you will be subject to their
              credit card policies.
            </p>
            <br />

            <h5 className="font-weight-normal mt-2 text-justify font-size-3">
              3. LEGAL ADVICE
            </h5>
            <p className="text-muted text-justify mt-2 font-size-1">
              The contents of Lorem Ipsum app do not constitute advice and
              should not be relied upon in making or refraining from making, any
              decision. <br />
              All material contained on Lorem Ipsum is provided without any or
              warranty of any kind. You use the material on Lorem Ipsum at your
              own discretion
            </p>
            <br />

            <h5 className="font-weight-normal mt-2 text-justify font-size-3">
              4. CHANGE OF USE
            </h5>
            <p className="text-muted text-justify font-size-1">
              Lorem Ipsum reserves the right to:
              <br />
            </p>
            <p className="text-muted text-justify font-size-1">
              <ul>
                <li>
                  4.1 change or remove (temporarily or permanently) the app or
                  any part of it without notice and you confirm that Lorem Ipsum
                  shall not be liable to you for any such change or removal and.
                </li>
                <li>
                  4.2 change these Terms and Conditions at any time, and your
                  continued use of the app following any changes shall be deemed
                  to be your acceptance of such change.
                </li>
              </ul>
            </p>
            <br />

            <h5 className="font-weight-normal  text-justify font-size-3">
              5. Links to Third Party apps and websites
            </h5>
            <p className="text-muted text-justify font-size-1">
              Lorem Ipsum app may include links to third party apps and websites
              that are controlled and maintained by others. Any link to other
              apps and websites is not an endorsement of such and you
              acknowledge and agree that we are not responsible for the content
              or availability of any such apps and websites.
            </p>
            <br />

            <h5 className="font-weight-normal  text-justify font-size-3">
              6. COPYRIGHT
            </h5>
            <p className="text-muted text-justify font-size-1">
              <ul>
                <li>
                  6.1 All copyright, trade marks and all other intellectual
                  property rights in the app and its content (including without
                  limitation the app design, text, graphics and all software and
                  source codes connected with the app) are owned by or licensed
                  to Lorem Ipsum or otherwise used by Lorem Ipsum as permitted
                  by law.
                </li>
                <li>
                  6.2 In accessing the app you agree that you will access the
                  content solely for your personal, non-commercial use. None of
                  the content may be downloaded, copied, reproduced,
                  transmitted, stored, sold or distributed without the prior
                  written consent of the copyright holder. This excludes the
                  downloading, copying and/or printing of pages of the app for
                  personal, non-commercial home use only.
                </li>
              </ul>
            </p>
            <p className="text-muted text-justify font-size-1"></p>
            <br />

            <h5 className="font-weight-normal  text-justify font-size-3">
              7. LINKS TO AND FROM OTHER apps and websites
            </h5>
            <p className="text-muted text-justify font-size-1">
              <ul>
                <li>
                  7.1 Throughout this app you may find links to third party
                  apps. The provision of a link to such an app does not mean
                  that we endorse that app. If you visit any app via a link in
                  this app you do so at your own risk.
                </li>
                <li>
                  7.2 Any party wishing to link to this app is entitled to do so
                  provided that the conditions below are observed:
                </li>
                <li>
                  <ol>
                    <li>
                      (a) You do not seek to imply that we are endorsing the
                      services or products of another party unless this has been
                      agreed with us in writing;
                    </li>
                    <li>
                      (b) You do not misrepresent your relationship with this
                      app; and
                    </li>
                    <li>
                      (c) The app from which you link to this app does not
                      contain offensive or otherwise controversial content or,
                      content that infringes any intellectual property rights or
                      other rights of a third party.
                    </li>
                  </ol>
                </li>
                <li>
                  7.3 By linking to this app in breach of our terms, you shall
                  indemnify us for any loss or damage suffered to this app as a
                  result of such linking.
                </li>
              </ul>
            </p>
            <p className="text-muted text-justify font-size-1"></p>
            <br />

            <h5 className="font-weight-normal  text-justify font-size-3">
              8. DISCLAIMERS AND LIMITATION OF LIABILITY
            </h5>
            <p className="text-muted text-justify font-size-1">
              <ul>
                <li>
                  8.1 The app is provided on an AS IS and AS AVAILABLE basis
                  without any representation or endorsement made and without
                  warranty of any kind whether express or implied, including but
                  not limited to the implied warranties of satisfactory quality,
                  fitness for a particular purpose, non-infringement,
                  compatibility, security and accuracy.
                </li>
                <li>
                  8.2 To the extent permitted by law, Lorem Ipsum will not be
                  liable for any indirect or consequential loss or damage
                  whatever (including without limitation loss of business,
                  opportunity, data, profits) arising out of or in connection
                  with the use of the app.
                </li>
                <li>
                  8.3 Lorem Ipsum makes no warranty that the functionality of
                  the app will be uninterrupted or error free, that defects will
                  be corrected or that the app or the server that makes it
                  available are free of viruses or anything else which may be
                  harmful or destructive.
                </li>
                <li>
                  8.4 Nothing in these Terms and Conditions shall be construed
                  so as to exclude or limit the liability of Lorem Ipsum for
                  death or personal injury as a result of the negligence of
                  Lorem Ipsum or that of its employees or agents.
                </li>
              </ul>
            </p>

            <br />

            <h5 className="font-weight-normal  text-justify font-size-3">
              9. INDEMNITY
            </h5>
            <p className="text-muted text-justify  font-size-1">
              You agree to indemnify and hold Lorem Ipsum and its employees and
              agents harmless from and against all liabilities, legal fees,
              damages, losses, costs and other expenses in relation to any
              claims or actions brought against Lorem Ipsum arising out of any
              breach by you of these Terms and Conditions or other liabilities
              arising out of your use of this app.
            </p>
            <br />

            <h5 className="font-weight-normal  text-justify font-size-3">
              10. SEVERANCE
            </h5>
            <p className="text-muted text-justify  font-size-1">
              If any of these Terms and Conditions should be determined to be
              invalid, illegal or unenforceable for any reason by any court of
              competent jurisdiction then such Term or Condition shall be
              severed and the remaining Terms and Conditions shall survive and
              remain in full force and effect and continue to be binding and
              enforceable.
            </p>
            <br />

            <h5 className="font-weight-normal  text-justify font-size-3">
              11. WAIVER
            </h5>
            <p className="text-muted text-justify  font-size-1">
              If you breach these Conditions of Use and we take no action, we
              will still be entitled to use our rights and remedies in any other
              situation where you breach these Conditions of Use.
            </p>
            <br />

            <h5 className="font-weight-normal  text-justify font-size-3">
              12. GOVERNING LAW
            </h5>
            <p className="text-muted text-justify  font-size-1">
              These Terms and Conditions shall be governed by and construed in
              accordance with the law of and you hereby submit to the exclusive
              jurisdiction of the courts.
            </p>
            <br />

            <h5 className="font-weight-normal  text-justify font-size-3">
              13. OUR CONTACT DETAILS
            </h5>
            <p className="text-muted text-justify  font-size-1">
              Our Support Address:{" "}
              <a href="http://www.astudioofourown.com" target="_blank">
                http://www.astudioofourown.com
              </a>
            </p>
            <br />
          </div>

          <div class="offset-md-2"></div>
        </div>
        <div
          className="col-12 py-3 text-center h-100"
          style={{ backgroundColor: "white" }}
        >
          <h3 className="font-weight-normal mt-2 font-size-5">
            A SMARTER WAY TO BUY TEXTBOOKS
          </h3>
          <div class="row pt-5 d-flex justify-content-center ">
            <div class="col-6 col-md-3">
              <h5 className="font-weight-normal mt-2 font-size-3">
                THE RIGHT EDITION,
                <br />
                GUARANTEED.
              </h5>
              <p className=" text-center text-muted mt-5 font-size-1">
                We work closely with your professors to ensure we only sell the
                editions they use in the classroom, saving you time and stress
                about finding it yourself.
              </p>
            </div>
            <div class="col-6 col-md-3">
              <h5 className="font-weight-normal mt-2 font-size-3">
                DROP A COURSE?
                <br />
                NO PROBLEM.
              </h5>
              <p className="text-center  text-muted mt-5 font-size-1">
                Don't stick with a class just because you bought the books.
                Return them during the add/drop period of the semester for a
                full refund.
              </p>
            </div>
            <div class="col-6 col-md-3">
              <h5 className="font-weight-normal mt-2 font-size-3">
                TRUSTED ADVICE ON
                <br />
                TEXTBOOKS.
              </h5>
              <p className="text-center text-muted mt-5 font-size-1">
                On the fence about buying books for a class? We let you know
                what's required on Day 1 and when to wait to purchase. Service
                you won't find anywhere else.
              </p>
            </div>
          </div>
          <div class="container col-9 pt-5">
            <hr />
          </div>
          {/**
           * NEED HELP
           */}
          <div class="container-fluid mb-3 d-flex justify-content-center">
            <div class="col-6  text-center">
              <p className="d-inline text-center font-weight-bold font-size-1">
                NEED HELP?
              </p>
              {NeedHelp.map((v, i) => {
                return (
                  <Link
                    to={v.needhelp_route}
                    className="d-inline text-center font-weight-normal px-2 font-size-1 border-right border-secondary"
                  >
                    {v.needhelp}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Copyrights;
