import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import IconLink from "../components/IconLink";
import API from "../utils/API";
import M from "materialize-css";

function Home() {
  const [nameState, setNameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [phoneState, setPhoneState] = useState("");
  const [messageState, setMessageState] = useState("");
  const [modalState, setModalState] = useState();
  const [errState, setErrState] = useState("");

  const handleSubmit = e => {
    e.preventDefault()

    if(nameState&&emailState&&messageState){
      API.sendMail({
        name:nameState,
        email:emailState,
        phone:phoneState,
        message:messageState
      }).then(res=>{
        M.toast({
          html: 'Mail sent!',
          displayLength:2000
        })
        setNameState("");
        setEmailState("");
        setPhoneState("");
        setMessageState("");
      })
      .catch(err=>{
        setErrState("Server error, try again later...")
        let instance = M.Modal.getInstance(modalState);
        instance.open();
        console.log(err);
      });
    } else {
      setErrState("Name, email, and message are required...")
      let instance = M.Modal.getInstance(modalState);
      instance.open();
    }
  }

  useEffect(() => {
    M.Modal.init(document.querySelectorAll('#modalError'));
  }, []);


  return (
    <Container>

      <Row>
        <h1 className="header center cyan-text">Contact</h1>
      </Row>

      <Row>
        <Col size="s12">
          <form onSubmit={handleSubmit}>
            <Row>
              <div className="input-field col l4 s12">
                <i className="material-icons prefix">account_circle</i>
                <input id="icon_prefix" type="text" className="validate"
                value={nameState} onChange={e=>setNameState(e.target.value)}/>
                <label htmlFor="icon_prefix">Name<sup>*</sup></label>
              </div>
              <div className="input-field col l4 s12">
                <i className="material-icons prefix">email</i>
                <input id="icon_email" type="email" className="validate"
                value={emailState} onChange={e=>setEmailState(e.target.value)}/>
                <label htmlFor="icon_email">Email<sup>*</sup></label>
              </div>
              <div className="input-field col l4 s12">
                <i className="material-icons prefix">phone</i>
                <input id="icon_telephone" type="tel" className="validate"
                value={phoneState} onChange={e=>setPhoneState(e.target.value)}/>
                <label htmlFor="icon_telephone">Telephone</label>
              </div>
            </Row>
            <Row>
              <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea"
                value={messageState} onChange={e=>setMessageState(e.target.value)}/>
                <label htmlFor="textarea1">Message<sup>*</sup></label>
              </div>
            </Row>
            <button className="btn waves-effect waves-light cyan" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
            </button>
            <span style={{marginLeft:15,color:"gray",fontSize:14}}><sup>*</sup>Required</span>
          </form>
        </Col>
      </Row>

      <Row>
        <Col size="s12" center>
          <IconLink link="https://github.com/Evolatum" icon="github-square"/>
          <IconLink link="http://linkedin.com/in/santiago-martinez-vara-62b301109" icon="linkedin"/>
        </Col>
      </Row>

      <div id="modalError" className="modal" ref={Modal=>setModalState(Modal)}>
        <div className="modal-content">
          <h4>Error Sending Mail</h4>
          <p>{errState}</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">Ok</a>
        </div>
      </div>
    </Container>
  );
}
export default Home;