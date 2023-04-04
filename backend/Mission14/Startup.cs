using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mission14.Models;
using Microsoft.EntityFrameworkCore;


namespace Mission14
{
    public class Startup
    {
        // this gets the info from the appssettings.json file
        public IConfiguration Configuration { get; set; }
        // also new 
        public Startup(IConfiguration temp_config)
        {
            Configuration = temp_config;
        }


        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
            // all below is new
            services.AddDbContext<JoelHiltonMovieCollectionContext>(options =>
            {
                options.UseSqlite(Configuration.GetConnectionString("MovieConnection"));
            });
            services.AddCors();
        }


        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(p => p.WithOrigins("http://localhost:3000"));

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
