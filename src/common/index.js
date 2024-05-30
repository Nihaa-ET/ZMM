
const backendDomain = "http://localhost:5050"

const SummaryApi = {

    SellerSignup : {
         url :`${backendDomain}/api/seller-register`,
         method : "post"
    },
    VerifyRegisterOtp :{
        url : `${backendDomain}/api/verifySellerRegister`,
        method : "post"

    },

    SellerLogin  : {

        url : `${backendDomain}/api/seller-login`,
        method : "post"

    },
    VerifyLoginOtp : {
        url : `${backendDomain}/api/verify-login-otp`,
        method : "post"
    },
   Logout : {
        url : `${backendDomain}/api/logout`,
        method : "get"
    },
    SellerForgotPassword : {
        url : `${backendDomain}/api/send-forgot-password-otp`,
        method : "post"
    },
    VerifyForgotPasswordOtp : {
        url : `${backendDomain}/api/verify-forgot-password-otp`,
        method : "post"
    },
    SellerResetPassword : {
        url : `${backendDomain}/api/reset-password`,
        method : "post"
    },
    Current_Sellers : {
        url : `${backendDomain}/api/all-sellers`,
        method : "get"
    },
    AddSellerDetails :{
        url : `${backendDomain}/api/seller-register-details`,
        method : "post"
    },
    GetAllSellerDetails : {
        url : `${backendDomain}/api/get-all-seller-details`,
        method : "get"
    },

    SoftDeleteSeller : {
        url : `${backendDomain}/api/softDeleteSeller`,
        method :"PATCH"
    },
    GetTrashedSeller :{
        url : `${backendDomain}/api/getTrashedSeller`,
        method : "get"
    },
    PermanantDeleteSeller : {
        url : `${backendDomain}/api/permanentDeleteSeller`,
        method : "delete"
    }

}

export default SummaryApi 