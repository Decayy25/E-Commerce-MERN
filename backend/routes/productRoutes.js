import express from "express";
import Product from '../models/Product.js';

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    if (Product) {
      const products = await Product.find();
      return res.json(products);
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }

  const sample = [
      { id:1, name: "Fantech Atom Mizu Series Mechanical Gaming Keyboard", price: 305000, img: Fantech_Keyboard },
      { id:2, name: "USB Flashdisk 64GB", price: 175000, img: Sandisk_Flaskdisk },
      { id:3, name: "JETEX MSX1 Series", price: 90000, img: Mouse_MSX1 },
      { id:4, name: "AMD Ryzen 5 5600", price: 2239000, img: Ryzen_5_5600 },
      { id:5, name: "ASUS ROG Strix GeForce RTX 4060 8GB OC Edition", price: 6485000, img: ASUS_ROG_Strix_GeForce_RTX_4060_8GB_OC_Edition },
      { id:6, name: "RX7 SSD M.2 NVME 256GB", price: 325000, img: RX7_SSD },
      { id:7, name: "Cat5e Patch Cable with Snagless RJ45 Connectors 1m White", price: 10000, img: Cat5e },
      { id:8, name: "TP-Link TL-WR844N High-Speed 300 Mbps Multi-Mode 4 in 1 Wi-Fi Router", price: 150000, img: tp_link_router },
      { id:9, name: "ASRock B550M Pro4 - Socket AM4", price: 1759000, img : ASRock_B550M },
      { id:10, name: "ROG Strix SCAR 16 (G635)", price: 85999000, img : ROG_Strix_SCAR },
    ];
  res.json(sample);
});

export default router;