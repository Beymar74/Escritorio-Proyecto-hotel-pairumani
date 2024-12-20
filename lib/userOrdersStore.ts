import { create } from "zustand";


type OrderType = {
  id: string;
  plaimagen: string;
  titulo: string;
  extra: string;
  cantidad: number;
};

type OrdersState = {
  enPreparacion: OrderType[];
  listo: OrderType[];
  entregado: OrderType[];
};

interface StoreState {
  orders: OrdersState;
  setOrders: (newOrders: OrdersState) => void;
  moveOrder: (id: string, from: keyof OrdersState, to: keyof OrdersState) => void;
}


const useOrdersStore = create<StoreState>((set) => ({
  orders: {
    enPreparacion: [],
    listo: [],
    entregado: [],
  },


  setOrders: (newOrders) => set({ orders: newOrders }),


  moveOrder: (id, from, to) =>
    set((state) => {
      const orderToMove = state.orders[from].find((order) => order.id === id);
      if (!orderToMove) return state;

      return {
        orders: {
          ...state.orders,
          [from]: state.orders[from].filter((order) => order.id !== id),
          [to]: [...state.orders[to], orderToMove],
        },
      };
    }),
}));

export default useOrdersStore;
