import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_INFO } from "@/lib/constants/contact";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, phone, lineId, carType, pickup, returnLocation, pickupDate, pickupTime, returnDate, returnTime } = data;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "กรุณากรอกชื่อและเบอร์โทรศัพท์ติดต่อ" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.warn("RESEND_API_KEY is not configured in environment variables.");
    }

    // Email HTML Template
    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
        <div style="text-align: center; margin-bottom: 24px; border-bottom: 2px solid #f97316; padding-bottom: 16px;">
          <h2 style="color: #0f172a; margin: 0; font-size: 22px;">🚗 รายการจองรถใหม่ (SR Travel)</h2>
          <p style="color: #64748b; font-size: 13px; margin-top: 4px;">มีลูกค้าทำรายการจองผ่านเว็บไซต์ออนไลน์</p>
        </div>

        <div style="background-color: #f8fafc; border-radius: 12px; padding: 18px; margin-bottom: 20px;">
          <h3 style="color: #ea580c; margin-top: 0; font-size: 15px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">👤 ข้อมูลผู้จอง / ผู้ติดต่อ</h3>
          <p style="margin: 6px 0; font-size: 14px; color: #334155;"><strong>ชื่อ-นามสกุล:</strong> ${name}</p>
          <p style="margin: 6px 0; font-size: 14px; color: #334155;"><strong>เบอร์โทรศัพท์:</strong> <a href="tel:${phone}" style="color: #ea580c; font-weight: bold;">${phone}</a></p>
          <p style="margin: 6px 0; font-size: 14px; color: #334155;"><strong>Line ID / WhatsApp:</strong> ${lineId || "-"}</p>
        </div>

        <div style="background-color: #f8fafc; border-radius: 12px; padding: 18px; margin-bottom: 20px;">
          <h3 style="color: #ea580c; margin-top: 0; font-size: 15px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">🚘 รายละเอียดการเดินทาง</h3>
          <p style="margin: 6px 0; font-size: 14px; color: #334155;"><strong>รุ่นรถที่เลือก:</strong> <span style="color: #0f172a; font-weight: bold;">${carType}</span></p>
          <p style="margin: 6px 0; font-size: 14px; color: #334155;"><strong>สถานที่รับ:</strong> ${pickup}</p>
          <p style="margin: 6px 0; font-size: 14px; color: #334155;"><strong>สถานที่ส่ง:</strong> ${returnLocation}</p>
          <p style="margin: 6px 0; font-size: 14px; color: #334155;"><strong>วันที่และเวลารับ:</strong> ${pickupDate || "-"} ${pickupTime ? `(เวลา ${pickupTime} น.)` : ""}</p>
          <p style="margin: 6px 0; font-size: 14px; color: #334155;"><strong>วันที่และเวลาส่ง:</strong> ${returnDate || "-"} ${returnTime ? `(เวลา ${returnTime} น.)` : ""}</p>
        </div>

        <div style="text-align: center; padding-top: 10px;">
          <a href="tel:${phone}" style="display: inline-block; background-color: #ea580c; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 9999px; font-weight: bold; font-size: 14px;">
            📞 โทรกลับหาลูกค้าทันที
          </a>
        </div>

        <p style="text-align: center; color: #94a3b8; font-size: 11px; margin-top: 24px; border-top: 1px solid #f1f5f9; padding-top: 12px;">
          ส่งอัตโนมัติจากระบบ SR Travel And Transfer Website • ${new Date().toLocaleString("th-TH")}
        </p>
      </div>
    `;

    if (apiKey) {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "SR Travel Booking <booking@srtravelandtransfer.com>",
        to: "Srtravel02024@gmail.com",
        cc: ["chidchanoksrichamnan01@gmail.com"],
        subject: `[SR Travel] คำขอจองรถใหม่จากคุณ ${name} (${phone})`,
        html: htmlContent,
      });
      return NextResponse.json({ success: true, message: "Email sent successfully" });
    } else {
      // Fallback log when API key is not yet set
      console.log("Mock Email Sent to:", CONTACT_INFO.email, { name, phone, carType });
      return NextResponse.json({ 
        success: true, 
        message: "Booking received (Resend API key missing, will use fallback)" 
      });
    }
  } catch (error: any) {
    console.error("Booking email error:", error);
    return NextResponse.json(
      { error: error?.message || "เกิดข้อผิดพลาดในการส่งข้อมูล" },
      { status: 500 }
    );
  }
}
