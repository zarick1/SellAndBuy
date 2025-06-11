import Wrapper from '../assets/wrappers/AddEditAd';
import { Form, redirect, useNavigation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  try {
    await axios.post('/api/v1/ads/post', data, { withCredentials: true });
    //console.log(data);
    toast.success('Creating your ad');
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
  const isEditing = Boolean(0);
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
            defaultValue="Bicikl na prodaju"
          />
        </div>

        <div className="form-row">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            defaultValue="Polovan bicikl, malo korišćen."
          />
        </div>

        <div className="form-row">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            name="imageUrl"
            defaultValue="https://via.placeholder.com/150"
          />
        </div>

        <div className="form-row">
          <label htmlFor="price">Price (EUR)</label>
          <input type="number" id="price" name="price" defaultValue="100" />
        </div>

        <div className="form-row">
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" defaultValue="Bijeljina" />
        </div>

        <div className="form-row">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" defaultValue="sports">
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
