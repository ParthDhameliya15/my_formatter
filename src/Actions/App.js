import axios from "axios";

export const getCssMinifyData = async (css_enter_code) => {
    console.log(css_enter_code)
    let result = {};
    let formData = new FormData();
    formData.append("css_enter_code", css_enter_code);
    try {
        const res = await axios.post(
            `http://minifycode.com/wp-content/themes/minify_code/minify.php?type=css`,
            formData
        );
        result = res.data || {};
        return {success: true, data: result};
    } catch (err) {
        console.log("error in getting time info : ", err);
        return {
            success: false,
            message: (err) || "something went wrong"
        };
    }
};

export const getJavascriptMinifyData = async (js_enter_code) => {
    let result = {};
    let formData = new FormData();
    formData.append("js_enter_code", js_enter_code);
    try {
        const res = await axios.post(
            `http://minifycode.com/wp-content/themes/minify_code/minify.php?type=js`,
            formData
        );
        result = res.data || {};
        return {success: true, data: result};
    } catch (err) {
        console.log("error in getting time info : ", err);
        return {
            success: false,
            message: (err) || "something went wrong"
        };
    }
};

export const getHTMLMinifyData = async (html_enter_code) => {
    let result = {};
    let formData = new FormData();
    formData.append("html_enter_code", html_enter_code);
    try {
        const res = await axios.post(
            `http://minifycode.com/wp-content/themes/minify_code/minify.php?type=html`,
            formData
        );
        result = res.data || {};
        return {success: true, data: result};
    } catch (err) {
        console.log("error in getting time info : ", err);
        return {
            success: false,
            message: (err) || "something went wrong"
        };
    }
};



