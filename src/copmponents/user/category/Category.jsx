import React from 'react'
import useFetch from '../../../hooks/useFetch';
import Loading from '../loading/Loading';
import style from './category.module.css';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function Category() {
    const { data, error, isLoading } = useFetch(`${import.meta.env.VITE_BURL}/categories/active`);
    if (isLoading) {
        return <Loading />
    }
    return (
        <section className={style.category}>
            <Container>
                <div className='d-flex justify-content-between '>
                    {data.categories.map(category =>

                        <Link to={`/categories/${category._id}`}>
                            <img src={category.image.secure_url} width={90} />
                        </Link>

                    )
                    }
                </div>

            </Container>

        </section>
    )
}
