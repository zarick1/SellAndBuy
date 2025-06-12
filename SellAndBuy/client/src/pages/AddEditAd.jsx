import { Form, redirect, useLoaderData, useNavigation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

import Wrapper from '../assets/wrappers/AddEditAd';
import FormRow from '../components/FormRow';
import FormRowSelect from '../components/FormRowSelect';

export const loader = async ({ params }) => {
  if (!params.id) return { ad: null };

  try {
    const resAd = await axios.get(`/api/v1/ads/get-ad/${params.id}`, {
      withCredentials: true,
    });

    return { ad: resAd.data.data.ad };
  } catch (err) {
    console.error('Failed to load ad:', err);
    return redirect('/');
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    if (params.id) {
      await axios.patch(`/api/v1/ads/edit-ad/${params.id}`, data, {
        withCredentials: true,
      });
      toast.success('Ad updated successfully');
    } else {
      await axios.post('/api/v1/ads/post', data, { withCredentials: true });
      //console.log(data);
      toast.success('Creating your ad');
    }
    return redirect('/');
  } catch (err) {
    console.log(err);
    toast.error(
      err?.response?.data?.err.message ||
        'Please try again or check if your are logged in'
    );

    return err;
  }
};

const AddEditAd = () => {
  const { ad } = useLoaderData();
  const isEditing = Boolean(ad);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
      <h2>{isEditing ? 'Edit Ad' : 'Add New Ad'}</h2>
      <Form method="post" className="form" key={isEditing ? ad?._id : 'new'}>
        <FormRow
          type="text"
          name="title"
          labelText="Title"
          defaultValue={ad?.title || ''}
        />

        <div className="form-row">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="8"
            className="form-input"
            defaultValue={ad?.description || ''}
            style={{ minHeight: '160px', resize: 'vertical' }}
          />
        </div>

        <FormRow
          type="text"
          name="imageUrl"
          labelText="Image URL"
          defaultValue={ad?.imageUrl || ''}
        />

        <FormRow
          type="number"
          name="price"
          labelText="Price (€)"
          defaultValue={ad?.price || ''}
        />

        <FormRow
          type="text"
          name="city"
          labelText="City"
          defaultValue={ad?.city || ''}
        />

        <FormRowSelect
          name="category"
          labelText="Category"
          defaultValue={ad?.category || ''}
          list={[
            'clothing',
            'tools',
            'sports',
            'accessories',
            'furniture',
            'pets',
            'games',
            'books',
            'technology',
          ]}
        />

        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting
            ? isEditing
              ? 'Updating...'
              : 'Creating...'
            : isEditing
            ? 'Update Ad'
            : 'Create Ad'}
        </button>
      </Form>
    </Wrapper>
  );
};

export default AddEditAd;
