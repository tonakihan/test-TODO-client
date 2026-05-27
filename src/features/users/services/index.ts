import api from "@/services";
import type { User } from "../types/User";

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], number | void>({
      query: (limit = 10) => `users?_limit=${limit}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Users", id }) as const),
              { type: "Users", id: "LIST" },
            ]
          : [{ type: "Users", id: "LIST" }],
    }),

    getUserById: builder.query<User, number>({
      query: (id) => `users/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Users", id }],
    }),

    addUser: builder.mutation<User, Partial<User>>({
      query: (body) => ({
        url: "users",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),

    updateUser: builder.mutation<User, Pick<User, "id"> & Partial<User>>({
      query: (body) => ({
        url: "users",
        method: "PATCH",
        body,
      }),
      invalidatesTags: (_res, _err, { id }) => [{ type: "Users", id }],
    }),
  }),
  // для Vite (HMR): предотвращает ошибки при горячей перезагрузке
  overrideExisting: false,
});
