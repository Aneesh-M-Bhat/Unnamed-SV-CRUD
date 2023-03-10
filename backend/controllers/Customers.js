import Customers from "../models/CustomersModel.js";
export const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customers.findAll();
    res.json(customers);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getCustomerById = async (req, res) => {
  try {
    const customer = await Customers.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(customer[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createCustomer = async (req, res) => {
  try {
    await Customers.create(req.body);
    res.json({
      message: "Customer Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateCustomer = async (req, res) => {
  try {
    await Customers.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Customer Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    await Customers.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Customer Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
