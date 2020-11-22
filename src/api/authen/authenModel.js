
const knex = require('../../knex');
class authenModel {

    getEmail(email) {

        return knex.raw(`select count(email) as count_email from CUSTOMER where email = '${email}'`)
    }
    getProfileByEmail(email) {
        // ทำการเรียก store procedure  ที่เก็บข้อมูล Customer,EMERGENCY_CONTACT,SOUVENIR_SHIRT,MEDICAL_INFORMATION
    }
    insertRegister(obj) {
        // ทำการเรียก store procedure insert register เนื่องจากต้อง insertเข้าหลาย TB และสามารถ ควบคุมการ roll back data ในกรณ๊เกิด error ได้

    }
    updateRegister(obj) {
        // ทำการเรียก store procedure update register เนื่องจากต้อง update เข้าหลาย TB และสามารถ ควบคุมการ roll back data ในกรณ๊เกิด error ได้
    }
    upsertSaveDraftByPageOne(obj) {
        //ทำการ เรียก store หลังบ้าน
        // โดย มีเงื่อนไขการเช็คดังนี้
        // 1. email มีอยู่ใน tabel แล้วหรือยังเคย save draft มาก่อนหรือป่าว
        // ถ้ามีแล้วจะ ทำการ Update ข้อมูลที่ table Customer,tb SOUVENIR_SHIRT
        // แต่ถ้ายังไม่เคยมีข้อมูล จะ Insert ข้อมูลที่ table Customer,tb SOUVENIR_SHIRT
    }
    upsertSaveDraftByPageTwo(obj) {
        //ทำการ เรียก store หลังบ้าน
        // โดย มีเงื่อนไขการเช็คดังนี้
        // 1. email มีอยู่ใน tabel แล้วหรือยังเคย save draft มาก่อนหรือป่าว
        // ถ้ามีแล้วจะ ทำการ Update ข้อมูลที่ table EMERGENCY_CONTACT
        // แต่ถ้ายังไม่เคยมีข้อมูล จะ Insert ข้อมูลที่ table EMERGENCY_CONTACT
    }
    upsertSaveDraftByPageThree(obj) {
        //ทำการ เรียก store หลังบ้าน
        // โดย มีเงื่อนไขการเช็คดังนี้
        // 1. email มีอยู่ใน tabel แล้วหรือยังเคย save draft มาก่อนหรือป่าว
        // ถ้ามีแล้วจะ ทำการ Update ข้อมูลที่ table MEDICAL_INFORMATION
        // แต่ถ้ายังไม่เคยมีข้อมูล จะ Insert ข้อมูลที่ table MEDICAL_INFORMATION
    }



}

module.exports = new authenModel();