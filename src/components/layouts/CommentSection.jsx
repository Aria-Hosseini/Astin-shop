import React, { useState } from 'react';
import './Stylecomment.css';

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment(''); 
    }
  };

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  return (
    <div className="flex flex-col w-325 p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 dir='rtl' className="text-xl font-bold mb-4">بخش کامنت‌ها</h2>
      
      

      <div className="flex items-center">
      <div className="radio">
        <input value="1" name="rating" type="radio" id="rating-1" />
        <label title="1 stars" htmlFor="rating-1">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
            <path
              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
            ></path>
          </svg>
        </label>

        <input value="2" name="rating" type="radio" id="rating-2" />
        <label title="2 stars" htmlFor="rating-2">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
            <path
              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
            ></path>
          </svg>
        </label>

        <input value="3" name="rating" type="radio" id="rating-3" />
        <label title="3 stars" htmlFor="rating-3">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
            <path
              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
            ></path>
          </svg>
        </label>

        <input value="4" name="rating" type="radio" id="rating-4" />
        <label title="4 stars" htmlFor="rating-4">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
            <path
              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
            ></path>
          </svg>
        </label>

        <input value="5" name="rating" type="radio" id="rating-5" />
        <label title="5 star" htmlFor="rating-5">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
            <path
              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
            ></path>
          </svg>
        </label>
      </div>

        <input
        dir='rtl'
          type="text"
          placeholder="کامنت خود را بنویسید..."
          value={newComment}
          onChange={handleInputChange}
          className="flex-grow p-2 border rounded-l-md"
        />
        <button 
          onClick={handleAddComment}
          className="bg-[#0eb79b] hover:bg-[#4b8d82] text-white font-bold px-4 py-2 rounded-r-md transition duration-200"
        >
          ارسال
        </button>

        

      </div>
      
      <div className="mb-4 mt-5">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              dir='rtl' 
              key={index} 
              className=" p-2 mb-2 rounded shadow-sm border"
            >
              {comment}
            </div>
          ))
        ) : (
          <p dir='rtl' className="text-gray-500">هنوز کامنتی ارسال نشده است.</p>
        )}
      </div>

    </div>
  );
}
