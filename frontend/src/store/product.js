import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please fill in all fields." };
    }

    const response = await fetch("/api/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    const data = await response.json();
    set((state) => ({ products: [...state.products, data.data] }));

    return { success: true, message: "Product created successfully" };
  },
  fetchProducts: async () => {
    const response = await fetch("/api/product");
    const data = await response.json();
    set({ products: data.data });
  },
  deleteProduct: async (pid) => {
    const response = await fetch(`/api/product/${pid}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (!data.success) {
      return { success: false, message: data.message };
    }
    set((state) => ({
      products: state.products.filter((product) => product._id !== pid),
    }));
    return { success: true, message: "Product deleted successfully" };
  },
  updateProduct: async (pid, updatedProduct) => {
    const res = await fetch(`/api/product/${pid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    // update the ui immediately, without needing a refresh
    set((state) => ({
      products: state.products.map((product) =>
        product._id === pid ? data.data : product
      ),
    }));

    return { success: true, message: data.message };
  },
}));
