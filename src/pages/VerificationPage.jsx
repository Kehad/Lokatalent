import VerificationComp from '../components/VerificationComp/verificationComp';


function VerificationPage({ content}) {
  console.log({ content });
  // console.log(content)
  return (
    <VerificationComp content={content} /> 
  )
}

export default VerificationPage