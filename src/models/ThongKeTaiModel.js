const mongoose = require('mongoose')
const thongketaiSchema = new mongoose.Schema(
    {
        QuanNhanId: { type: String },

        Nam: { type: Number },

        TaiDaoTaoYeuCau: { type: Number },
        TaiNCKHYeuCau: { type: Number },

        TongTaiYeuCau: { type: Number },

        TaiThucDaoTaoYeuCau: { type: Number },
        TaiThucNCKHYeuCau: { type: Number },

        TongThucTai: { type: Number },

        GhiChu: { type: String },
        edituser: { type: String },
        edittime: { type: String }

    },
    {
        timestamps: true
    }
);
const ThongKeTai = mongoose.model("ThongKeTai", thongketaiSchema);
module.exports = ThongKeTai;