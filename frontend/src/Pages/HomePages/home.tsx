import axios from 'axios';
import React, { useEffect, useState } from 'react';

const client = axios.create({
    baseURL: "http://localhost:4000/users"
});

const Home: React.FC = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await client.get('');
                setPosts(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <div className='temp'>
                <label>USERS</label>
            </div>
            <table className='form_table'> 
                <tr>
                    <th>ID</th>
                    <th>USERNAME</th>
                    <th>NAME</th>
                    <th>PROFESSION</th>
                    <th>BIRTH DATE</th>
                    <th>E-MAIL</th>
                    <th>LANGUAGE</th>
                    <th></th>
                    <th>ACTIVE</th>
                </tr>
                {posts.map((post: any) => (
                <tr>
                    <th>{post.id}</th>
                    <th>{post.username}</th>
                    <th>{post.name}</th>
                    <th>{post.profession}</th>
                    <th>{post.birthDate}</th>
                    <th>{post.eMail}</th>
                    <th>{post.language}</th>
                    <th></th>
                    <th>{post.IsActive.toString()}</th>
                </tr>
            ))}
            </table>
        </div>
        
    );
};

export default Home;
