import React from "react";
import PropTypes from "prop-types";
import {
	FaLink,
	FaEye,
	FaStar,
	FaInfo,
	FaUtensils,
	FaCodeBranch,
	FaExclamationTriangle,
} from "react-icons/fa";

function RepoItem({ repo }) {
	const {
		name,
		description,
		html_url,
		forks,
		open_issues,
		watchers_count,
		stargazers_count,
	} = repo;

	return (
		<div className='mb-2 rounded-md border-2 border-zinc-700 hover:bg-zinc-700 p-3'>
			<div className=''>
				<h3 className='mb-2 text-xl font-semibold'>
					<a href={html_url}>
						<FaLink className='inline mr-1' />
						{name}
					</a>
				</h3>
				<p className='mb-3'>{description}</p>
				<div className='flex flex-row justify-end'>
					<div className='p-2 text-center'>
						<FaEye />
						{watchers_count}
					</div>
					<div className='p-2 text-center'>
						<FaStar />
						{stargazers_count}
					</div>
					<div className='p-2 text-center'>
						<FaInfo />
						{open_issues}
					</div>
					<div className='p-2 text-center'>
						<FaUtensils />
						{forks}
					</div>
				</div>
			</div>
		</div>
	);
}

RepoItem.propTypes = {
	repo: PropTypes.object.isRequired,
};

export default RepoItem;
