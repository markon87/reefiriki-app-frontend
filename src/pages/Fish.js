import {Link, useParams} from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_FISH } from '../queries/fishQueries'

 export const Fish = () => {
    const {id} = useParams();
    const {loading, error, data } = useQuery(GET_FISH, {variables: {id}});

    if (loading) return "Loading..."
    if(error) return <pre>{error.message}</pre>


   return (
     <>
     {!loading && !error && (
        <div className='single-fish-page'>
            <img src={data.getFish.imageUrl} alt={data.getFish.name} />
            <div className='description'>
                <h1>{data.getFish.name}</h1>
                <p><strong>Family: </strong>{data.getFish.family.name}</p>
                <p><strong>Care Level: </strong>{data.getFish.careLevel}</p>
                <p><strong>Temperament: </strong>{data.getFish.temperament}</p>
                <p><strong>Diet: </strong>{data.getFish.diet}</p>
                <p><strong>Reef Compatible: </strong>{data.getFish.reefCompatibility ? 'Yes' : 'No'}</p>
                <p><strong>Max Fish Size: </strong>{data.getFish.maxSize}</p>
                <p><strong>Minimum Tank Size: </strong>{data.getFish.minTankSize}</p>
                <br />
                <Link to='/' className='btn'>Go Home</Link>
            </div>
        </div>
     )}
     </>
   )
 }
 