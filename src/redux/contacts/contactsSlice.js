import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://connections-api.herokuapp.com';

export const contactsSliceAPI = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    registerUser: builder.mutation({
      query: body => ({ url: '/users/signup', method: 'POST', body }),
    }),

    logInUser: builder.mutation({
      query: data => ({ url: '/users/login', method: 'POST', body: data }),
    }),

    logOutUser: builder.mutation({
      query: () => ({ url: '/users/logout', method: 'POST' }),
    }),

    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),

    addContact: builder.mutation({
      query: contacts => ({
        url: '/contacts',
        method: 'POST',
        body: contacts,
      }),
      invalidatesTags: ['Contact'],
    }),

    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useRegisterUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
} = contactsSliceAPI;
