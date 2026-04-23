// ══════════════════════════════════════════════════════════════════
//  ⚙️  config.js — แก้ไขไฟล์นี้ก่อนใช้งาน
//  วางไฟล์นี้ในโฟลเดอร์เดียวกับ index.html
// ══════════════════════════════════════════════════════════════════

// 🔴 REQUIRED: ใส่ URL ของ Google Apps Script Web App ที่นี่
// วิธีหา URL: ใน Apps Script Editor → Deploy → Manage deployments → Copy URL
window.GAS_URL = 'https://script.google.com/macros/library/d/1DjaPJl3G0X03LqVITQVvNlZeAstZn04g7s0ljDc7c4dE-5eDjQMFW3_R/1';

// ══════════════════════════════════════════════════════════════════
//  วิธีตั้งค่า (Setup Guide)
// ══════════════════════════════════════════════════════════════════
//
//  STEP 1 — Google Sheets
//  ─────────────────────────────────────────────────────────────────
//  1. สร้าง Google Spreadsheet ใหม่
//  2. จด Spreadsheet ID (จาก URL: /d/SPREADSHEET_ID/edit)
//
//  STEP 2 — Google Apps Script
//  ─────────────────────────────────────────────────────────────────
//  1. ไปที่ script.google.com → New project
//  2. คัดลอกโค้ดจาก Code.gs วางในโปรเจกต์
//  3. แก้ไข SPREADSHEET_ID ในโค้ด หรือตั้งใน Script Properties:
//     Project Settings → Script Properties → เพิ่ม:
//       Key: SPREADSHEET_ID  Value: (ID จาก Step 1)
//       Key: FOLDER_ID       Value: (Google Drive Folder ID สำหรับรูปภาพ)
//       Key: LINE_TOKEN      Value: (LINE Notify Token — ทำใน Step 5)
//
//  STEP 3 — Deploy Web App
//  ─────────────────────────────────────────────────────────────────
//  1. คลิก Deploy → New deployment
//  2. Type: Web app
//  3. Execute as: Me
//  4. Who has access: Anyone  ← สำคัญมาก!
//  5. Deploy → Copy Web App URL
//  6. วาง URL ใน window.GAS_URL ด้านบน
//
//  STEP 4 — ติดตั้งระบบครั้งแรก
//  ─────────────────────────────────────────────────────────────────
//  วิธีที่ 1: เปิด Spreadsheet → เมนู "⚙️ ระบบพัสดุ" → "🚀 ติดตั้งระบบ"
//  วิธีที่ 2: เรียก URL: [GAS_URL]?action=setupSystem
//
//  STEP 5 — LINE Notify (ถ้าต้องการ)
//  ─────────────────────────────────────────────────────────────────
//  1. ไปที่ https://notify-bot.line.me/th/
//  2. Login ด้วย LINE account
//  3. "สร้าง Token" → ตั้งชื่อ → เลือกห้อง LINE ที่ต้องการรับแจ้งเตือน
//  4. Copy Token
//  5. ในระบบ: ไปที่ ตั้งค่า → 📢 LINE → วาง Token → บันทึก
//  หรือ ตั้งใน Script Properties: LINE_TOKEN = (token ของคุณ)
//
//  STEP 6 — GitHub Pages
//  ─────────────────────────────────────────────────────────────────
//  1. สร้าง GitHub repository ใหม่ (ชื่ออะไรก็ได้)
//  2. อัปโหลด index.html และ config.js เข้า repository
//  3. Settings → Pages → Source: Deploy from a branch → main / (root)
//  4. รอ 1-2 นาที → เข้าใช้งานที่ https://[username].github.io/[repo]/
//
//  ❗ หมายเหตุสำคัญ:
//  • ทุกครั้งที่ Deploy GAS ใหม่ จะได้ URL ใหม่ → ต้องอัปเดต config.js ด้วย
//  • ถ้าต้องการ URL คงที่: ใช้ "Manage deployments" → อัปเดต deployment เดิม
//  • PIN ถูก hash ด้วย SHA-256 ก่อนส่ง — GAS ไม่เห็น PIN จริง
//  • Session เก็บใน localStorage (ไม่มีหมดอายุ — ต้อง logout เอง)
//
// ══════════════════════════════════════════════════════════════════
