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
      <Form method="post" className="form">
        <div className="form-row">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={ad?.title || ''}
          />
        </div>

        <div className="form-row">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            defaultValue={ad?.description || ''}
          />
        </div>

        <div className="form-row">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            name="imageUrl"
            defaultValue={ad?.imageUrl || ''}
          />
        </div>

        <div className="form-row">
          <label htmlFor="price">Price ($)</label>
          <input
            type="number"
            id="price"
            name="price"
            defaultValue={ad?.price || ''}
          />
        </div>

        <div className="form-row">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            defaultValue={ad?.city || ''}
          />
        </div>

        <div className="form-row">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            defaultValue={ad?.category || 'clothing'}
          >
            <option value="clothing">Clothing</option>
            <option value="tools">Tools</option>
            <option value="sports">Sports</option>
            <option value="accessories">Accessories</option>
            <option value="furniture">Furniture</option>
            <option value="pets">Pets</option>
            <option value="games">Games</option>
            <option value="books">Books</option>
            <option value="technology">Technology</option>
          </select>
        </div>

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
