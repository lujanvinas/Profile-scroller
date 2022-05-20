const data = [ 
    {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Toronto, ON',
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
    name: 'Sarah Johnson',
    age: 25,
    gender: 'female',
    lookingfor: 'male',
    location: 'Vancouver, BC',
    image: 'https://randomuser.me/api/portraits/women/36.jpg'
    },
    {
    name: 'Jill Smith',
    age: 42,
    gender: 'female',
    lookingfor: 'male',
    location: 'Calgary, AB',
    image: 'https://randomuser.me/api/portraits/women/24.jpg'
    }
]

const profiles = profileIterator(data);

// call first profile on page load
nextProfile();

// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// Next profile function
function nextProfile() {
    const currentProfile =profiles.next().value;

    if(currentProfile !== undefined){
        document.getElementById('profileDisplay').innerHTML = `<ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>`;
    
        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`

    } else {
        // no more profiles
        window.location.reload();

    }
}


//Profile iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true };
        }
    }
}