<template>
  <div style="margin-top: 5rem">
    <h3>Validate forms</h3>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(onSubmit)">
        <ValidationProvider
          name="Name"
          rules="required|alpha"
          v-slot="{ errors }"
        >
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="name" />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider
          name="E-mail"
          rules="required|email"
          v-slot="{ errors }"
        >
          <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider
          name="Password"
          rules="required|min:6"
          v-slot="{ errors }"
        >
          <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" />
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider name="Gender" rules="required" v-slot="{ errors }">
          <div class="form-group">
            <label>Gender</label>
            <select class="form-control" v-model="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <span>{{ errors[0] }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider
          name="Accept Terms"
          rules="required"
          v-slot="{ errors }"
        >
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="acceptTerms"
            />
            <label class="formchecklabel">Accept Terms</label>
          </div>
          <span>{{ errors[0] }}</span
          ><br />
        </ValidationProvider>
        <input type="submit" class="btn btn-primary mt-3" text="Submit" />
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  data: () => ({
    formData: {
      name: "",
      email: "",
      password: "",
      gender: "",
      acceptTerms: null
    }
  }),
  methods: {
    onSubmit() {
      console.log(this.formData);
    }
  }
};
</script>
