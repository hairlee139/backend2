const DonViService = require('../services/DonViService')

const createDonVi = async (req, res) => {
    try {
        const { code,
            codeview,
            name,
            note,
            edituser,
            edittime,
            lock,
            lockdate,
            managelevelcode,
            unitcode,
            parentcode,
            comparelevel,
            theorder,
            phone,
            email,
            managestaff,
            whois,
            thucluc,
            bienche } = req.body
        if (!code) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        }
        const response = await DonViService.createDonVi(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateDonVi = async (req, res) => {
    try {
        const code = req.params.id
        const data = req.body
        if (!code) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The code is required'
            })
        }
        const response = await DonViService.updateDonVi(code, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getDetailsDonVi = async (req, res) => {
    try {
        const code = req.params.id
        if (!code) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The code is required'
            })
        }
        const response = await DonViService.getDetailsDonVi(code)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteDonVi = async (req, res) => {
    try {
        const code = req.params.id
        if (!code) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The code is required'
            })
        }
        const response = await DonViService.deleteDonVi(code)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteMany = async (req, res) => {
    try {
        const ids = req.body.ids
        if (!ids) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ids is required'
            })
        }
        const response = await DonViService.deleteManyDonVi(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllDonVi = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await DonViService.getAllDonVi(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await DonViService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
const getDonViCon = async (req, res) => {
    try {
        const donvichaid = req.params.id // Lấy donvichaId của user đang đăng nhập từ request
        const data = req.body
        if (!donvichaid) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User donvichaid is not defined'
            });
        }

        const response = await DonViService.getDonViCon(donvichaid,data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDonVifromcode = async (req, res) => {
    try {
        const donvichaid = req.params.id // Lấy donvichaId của user đang đăng nhập từ request
        const data = req.body
        if (!donvichaid) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User donvichaid is not defined'
            });
        }

        const response = await DonViService.getDonVifromcode(donvichaid,data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDonVifromObjectId = async (req, res) => {
    try {
        const donvichaid = req.params.id // Lấy donvichaId của user đang đăng nhập từ request
        const data = req.body
        if (!donvichaid) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User donvichaid is not defined'
            });
        }

        const response = await DonViService.getDonVifromObjectId(donvichaid,data);
        const codes = response.data.map(item => item.code);
        return res.status(200).json(codes);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDonViConWithHocViCounts  = async (req, res) => {
    try {
        const donvichaid = req.params.id // Lấy donvichaId của user đang đăng nhập từ request
        const data = req.body
        if (!donvichaid) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User donvichaid is not defined'
            });
        }

        const response = await DonViService.getDonViConWithHocViCounts(donvichaid,data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDonViConOnly = async (req, res) => {
    try {
        const donvichaid = req.params.id // Lấy donvichaId của user đang đăng nhập từ request
        const data = req.body
        if (!donvichaid) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User donvichaid is not defined'
            });
        }

        const response = await DonViService.getDonViConOnly(donvichaid,data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDonViConByTen = async (req, res) => {
    try {
        const donvichaid = req.params.id // Lấy donvichaId của user đang đăng nhập từ request
        const data = req.body
        if (!donvichaid) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User donvichaid is not defined'
            });
        }

        const response = await DonViService.getDonViConByTen(donvichaid,data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};
const getDonViConOnly2 = async (req, res) => {
    try {
        const donvichaid = req.params.id // Lấy donvichaId của user đang đăng nhập từ request
        const data = req.body
        if (!donvichaid) {
            return res.status(200).json({
                status: 'ERR',
                message: 'User donvichaid is not defined'
            });
        }

        const response = await DonViService.getDonViConOnly2(donvichaid,data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
};

module.exports = {
    createDonVi,
    updateDonVi,
    getDetailsDonVi,
    deleteDonVi,
    getAllDonVi,
    deleteMany,
    getAllType,
    getDonViCon,
    getDonViConOnly,
    getDonViConOnly2,
    getDonVifromcode,
    getDonViConByTen,
    getDonViConWithHocViCounts,
    getDonVifromObjectId
}
