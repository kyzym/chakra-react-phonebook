import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'redux/store';
import {
  AuthRegisterResponse,
  Contact,
  Login,
  UserCredentials,
} from 'types/types';

const BASE_URL = 'https://connections-api.herokuapp.com';

export const contactsSliceAPI = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    registerUser: builder.mutation<AuthRegisterResponse, UserCredentials>({
      query: body => ({ url: '/users/signup', method: 'POST', body }),
    }),

    logInUser: builder.mutation<AuthRegisterResponse, Login>({
      query: data => ({ url: '/users/login', method: 'POST', body: data }),
    }),

    logOutUser: builder.mutation<void, void>({
      query: () => ({ url: '/users/logout', method: 'POST' }),
    }),

    getContacts: builder.query<Contact[], void>({
      query: () => '/contacts',
      providesTags: ['Contact'],
    }),

    addContact: builder.mutation<Contact, Omit<Contact, 'id'>>({
      query: contacts => ({
        url: '/contacts',
        method: 'POST',
        body: contacts,
      }),
      invalidatesTags: ['Contact'],
    }),

    deleteContact: builder.mutation<void, Contact['id']>({
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
