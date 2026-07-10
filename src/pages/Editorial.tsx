// "A page that says 'editorial' and lets me lay out a blurb and a few samples in a simple grid way"

import { useMemo } from 'react'
import { useParams, Navigate, NavLink, Link } from 'react-router-dom'
import DukeofWellington from '../components/UnderConstruction'

export default function Editorial() {
    return(
        <div className="container page">
            <DukeofWellington />
            <h3>Under construction!</h3>
        </div>
    )
}