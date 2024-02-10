<template>
  <div>
    <div>
      <img src="~/assets/sorting.svg" alt="sorting" id="sort-icon" />
    </div>
    <div>
      <p>Sort by:</p>
      <div>
        <div>
          <input
            type="radio"
            id="number"
            name="filters"
            value="number"
            checked
          />
          <label for="number">Number</label>
        </div>
        <div>
          <input type="radio" name="filters" id="name" value="name" />
          <label for="name">Name</label>
        </div>
      </div>
    </div>
  </div>
</template>
