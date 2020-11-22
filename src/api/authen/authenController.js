const authenModel = require('./authenModel.js');

const { success, failed } = require('../../config/response');
const { transaction } = require('../../middleware/transaction')
const { generateToken } = require('./../../functions')
class authenController {
    async login(req, res) {
        try {
            const { email } = req.body;
            generateToken(req, email);
            let respon = {
                token: req.token,
                token_login: req.token_login,
            }
            success(res, respon);
        } catch (error) {
            failed(res, 'ดึงข้อมูลไม่สำเร็จ', error)
        }
    }

    async getProfile(req, res) {
        try {
            let respon = [];
            respon = await getProfileByEmail(req.email)
            success(res, respon);
        } catch (error) {
            failed(res, 'ดึงข้อมูลไม่สำเร็จ', error)
        }
    }

    async saveDraft(req, res) {
        try {
            const email = req.email;
            const { page } = req.body;

            // จาก requiment ได้บอกว่าก่อนจะไปหน้าต่างๆจะต้องกรอกข้อมูลให้ครบผมจึงสมมุติว่า
            // front end ประกอบด้วยหน้าหลักๆที่ต้องมีปุ่มกดถัดไปทั้งหมด
            // 3 หน้าหลัก
            // - ข้อมูลส่วนตัว + ไซต์เสื้อ  (page 1)
            // - ข้อมูลผู้ติดต่อฉุกเฉย(page 2)
            // - ข้อมูลทางการแพทย์ (page 3)

            switch (page) {
                case 1: await authenModel.upsertSaveDraftByPageOne()
                    break;
                case 2: await authenModel.upsertSaveDraftByPageTwo()
                    break;
                case 3: await authenModel.upsertSaveDraftByPageThree()
                    break;
                default: break;

            }


            success(res, 'สร้างข้อมูลสำเร็จ');
        } catch (error) {
            failed(res, 'สร้างข้อมูลไม่สำเร็จ', error)
        }
    }
    async register(req, res) {
        try {
            const email = req.email;

            //get email from base 
            let querylength_email = await authenModel.getEmail(email)
            querylength_email.length === 0 ? await authenModel.insertRegister() : await authenModel.updateRegister()
            success(res, 'สร้างข้อมูลสำเร็จ');
        } catch (error) {
            failed(res, 'สร้างข้อมูลไม่สำเร็จ', error)
        }
    }
}

module.exports = new authenController()